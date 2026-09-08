"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function ContactForm() {
  const [form, setForm] = useState({ nome: "", email: "", empresa: "", mensagem: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Sem Formspree configurado → abre o e-mail (fallback)
    if (!SITE.formspree) {
      const subject = encodeURIComponent(`Contato pelo site — ${form.nome || "sem nome"}`);
      const body = encodeURIComponent(
        `Nome: ${form.nome}\nEmail: ${form.email}\nEmpresa: ${form.empresa}\n\n${form.mensagem}`
      );
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${SITE.formspree}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ nome: "", email: "", empresa: "", mensagem: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-brand-200 bg-brand-50 p-6 text-center">
        <p className="font-semibold text-ink">Mensagem enviada!</p>
        <p className="mt-1 text-sm text-muted">Recebemos seu contato e retornamos em breve.</p>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-ink">Nome</label>
          <input id="nome" name="nome" value={form.nome} onChange={update} required className={field} placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={update} required className={field} placeholder="voce@empresa.com" />
        </div>
      </div>
      <div>
        <label htmlFor="empresa" className="mb-1.5 block text-sm font-medium text-ink">Empresa</label>
        <input id="empresa" name="empresa" value={form.empresa} onChange={update} className={field} placeholder="Nome da sua empresa" />
      </div>
      <div>
        <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-ink">Mensagem</label>
        <textarea id="mensagem" name="mensagem" value={form.mensagem} onChange={update} required rows={5} className={field} placeholder="Como podemos ajudar?" />
      </div>
      {status === "error" && (
        <p className="text-sm text-negative">
          Não foi possível enviar. Tente novamente ou escreva para {SITE.email}.
        </p>
      )}
      <button type="submit" disabled={status === "sending"} className="btn btn-primary btn-lg w-full disabled:opacity-60">
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}
