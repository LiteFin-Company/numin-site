import { SITE, PARTNER_FORM } from "@/lib/site";

// Recebe o formulário "Quero ser parceiro" e manda um e-mail para o contato do
// Numin pelo Resend (o mesmo serviço do backend). Sem RESEND_API_KEY a rota
// responde 503 e o modal oferece o e-mail como alternativa.

const LIMITS = { name: 120, email: 160, whatsapp: 20, company: 120, industry: 120, pain: 2000 };

const clean = (value, max) => (typeof value === "string" ? value.trim().slice(0, max) : "");

const escapeHtml = (text) =>
  text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function validate(body) {
  const data = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    whatsapp: clean(body.whatsapp, LIMITS.whatsapp),
    company: clean(body.company, LIMITS.company),
    industry: clean(body.industry, LIMITS.industry),
    teamSize: clean(body.teamSize, 40),
    currentControl: clean(body.currentControl, 40),
    bank: clean(body.bank, 40),
    pain: clean(body.pain, LIMITS.pain),
  };
  const digits = data.whatsapp.replace(/\D/g, "");
  if (!data.name || !data.company || !data.industry) return { error: "Preencha os campos obrigatórios." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return { error: "Confira o e-mail." };
  if (digits.length < 10 || digits.length > 11) return { error: "Confira o WhatsApp, com DDD." };
  if (!PARTNER_FORM.teamSizes.includes(data.teamSize)) return { error: "Escolha quantas pessoas trabalham na empresa." };
  if (!PARTNER_FORM.currentControl.includes(data.currentControl)) return { error: "Escolha como controla o financeiro hoje." };
  if (data.bank && !PARTNER_FORM.banks.includes(data.bank)) return { error: "Escolha o banco principal na lista." };
  if (body.consent !== true) return { error: "É preciso aceitar a Política de Privacidade." };
  return { data };
}

function buildEmail(d) {
  const rows = [
    ["Nome", d.name],
    ["E-mail", d.email],
    ["WhatsApp", d.whatsapp],
    ["Empresa", d.company],
    ["Ramo de atividade", d.industry],
    ["Pessoas na empresa", d.teamSize],
    ["Financeiro hoje", d.currentControl],
    ["Banco principal", d.bank || "Não informado"],
    ["O que mais incomoda", d.pain || "Não informado"],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<h2 style="font-family:sans-serif">Novo interesse em Parceiros Numin</h2>
<table style="font-family:sans-serif;border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#51607a;vertical-align:top">${k}</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("")}</table>`;
  return { text, html };
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Envio inválido." }, { status: 400 });
  }

  // Campo invisível: só robô preenche. Responde como sucesso e não envia nada.
  if (body?.website) return Response.json({ ok: true });

  const { data, error } = validate(body ?? {});
  if (error) return Response.json({ error }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[parceiros] RESEND_API_KEY ausente; formulário não enviado.");
    return Response.json({ error: "unavailable" }, { status: 503 });
  }

  const { text, html } = buildEmail(data);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM || "Numin <no-reply@numin.com.br>",
      to: [process.env.PARTNER_FORM_TO || SITE.email],
      reply_to: data.email,
      subject: `Parceiros Numin: ${data.company}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[parceiros] Resend respondeu", res.status, await res.text().catch(() => ""));
    return Response.json({ error: "unavailable" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
