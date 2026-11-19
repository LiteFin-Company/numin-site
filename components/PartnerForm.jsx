"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { SITE, FOUNDER_OFFER, PARTNER_FORM } from "@/lib/site";

// Botão "Quero ser parceiro" + modal com o formulário. O <dialog> nativo cuida
// do foco, do Esc e do fundo escurecido; o envio vai para /api/parceiros.

const fieldClass =
  "mt-1.5 block w-full rounded-card border border-slate-300 bg-white px-3.5 py-2.5 text-ink placeholder:text-slate-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20";

// (82) 99999-9999 conforme a pessoa digita.
function maskPhone(value) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function Field({ label, optional, children }) {
  return (
    <label className="block text-sm font-semibold text-ink">
      {label}
      {optional && <span className="ml-1 font-medium text-muted">(opcional)</span>}
      {children}
    </label>
  );
}

function Select({ name, options, required }) {
  return (
    <select name={name} required={required} defaultValue="" className={`${fieldClass} h-11`}>
      <option value="" disabled={required}>
        {required ? "Escolha" : "Não informar"}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export default function PartnerForm({ className = "" }) {
  const dialogRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  const open = () => {
    if (status !== "sent") {
      setStatus("idle");
      setError("");
    }
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    payload.consent = form.get("consent") === "on";
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/parceiros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("sent");
        return;
      }
      setStatus("error");
      setError(data.error && data.error !== "unavailable" ? data.error : "");
    } catch {
      setStatus("error");
      setError("");
    }
  }

  return (
    <>
      <button type="button" onClick={open} className={className}>
        {FOUNDER_OFFER.cta} <ArrowRight size={18} aria-hidden />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="parceiro-titulo"
        // Clique no fundo escurecido fecha o modal.
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-panel bg-white p-0 text-ink shadow-float backdrop:bg-ink/60"
      >
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow">
                {FOUNDER_OFFER.name} · <span className="tabnum">{FOUNDER_OFFER.slots}</span> vagas
              </p>
              <h2 id="parceiro-titulo" className="mt-2 text-2xl font-bold text-ink">
                {status === "sent" ? "Recebemos o seu interesse" : FOUNDER_OFFER.cta}
              </h2>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="-mr-2 -mt-1 rounded-lg p-2 text-muted hover:bg-nuvem hover:text-ink"
            >
              <X size={20} aria-hidden />
            </button>
          </div>

          {status === "sent" ? (
            <div className="mt-4">
              <p className="flex gap-3 text-ink-700">
                <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-positive" aria-hidden />
                Respondemos em até 1 dia útil, pelo WhatsApp ou por e-mail.
              </p>
              <p className="mt-6 text-sm text-muted">Se quiser, já pode ir conhecendo o Numin.</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <a href={SITE.signupUrl} className="btn btn-primary justify-center">
                  Criar conta grátis <ArrowRight size={18} aria-hidden />
                </a>
                <button type="button" onClick={close} className="btn btn-ghost justify-center">
                  Fechar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <p className="text-sm text-muted">Respondemos em até 1 dia útil, pelo WhatsApp ou por e-mail.</p>

              <Field label="Nome">
                <input name="name" required maxLength={120} autoComplete="name" className={`${fieldClass} h-11`} />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="E-mail">
                  <input name="email" type="email" required maxLength={160} autoComplete="email" className={`${fieldClass} h-11`} />
                </Field>
                <Field label="WhatsApp">
                  <input
                    name="whatsapp"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel-national"
                    placeholder="(82) 99999-9999"
                    pattern="\(\d{2}\) \d{4,5}-\d{4}"
                    title="DDD e número, por exemplo (82) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(maskPhone(e.target.value))}
                    className={`${fieldClass} h-11 tabnum`}
                  />
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Empresa">
                  <input name="company" required maxLength={120} autoComplete="organization" className={`${fieldClass} h-11`} />
                </Field>
                <Field label="Ramo de atividade">
                  <input
                    name="industry"
                    required
                    maxLength={120}
                    placeholder="Ex.: agência de marketing"
                    className={`${fieldClass} h-11`}
                  />
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Pessoas na empresa">
                  <Select name="teamSize" options={PARTNER_FORM.teamSizes} required />
                </Field>
                <Field label="Como controla o financeiro hoje">
                  <Select name="currentControl" options={PARTNER_FORM.currentControl} required />
                </Field>
              </div>
              <Field label="Banco principal" optional>
                <Select name="bank" options={PARTNER_FORM.banks} />
              </Field>
              <Field label="O que mais te incomoda no financeiro hoje?" optional>
                <textarea name="pain" rows={3} maxLength={2000} className={fieldClass} />
              </Field>

              {/* Campo invisível contra robôs: pessoas não veem nem chegam nele pelo teclado. */}
              <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label>
                  Site
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <label className="flex items-start gap-3 text-sm text-ink-700">
                <input
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 accent-brand-600"
                />
                <span>
                  Li e aceito a{" "}
                  <Link href="/privacidade" target="_blank" className="font-semibold text-brand-600 underline underline-offset-4">
                    Política de Privacidade
                  </Link>
                  .
                </span>
              </label>

              {status === "error" && (
                <p role="alert" className="rounded-card bg-negative/10 px-4 py-3 text-sm text-ink">
                  {error || (
                    <>
                      Não conseguimos enviar agora. Tente de novo ou escreva para{" "}
                      <a href={`mailto:${SITE.email}`} className="font-semibold text-brand-600 underline underline-offset-4">
                        {SITE.email}
                      </a>
                      .
                    </>
                  )}
                </p>
              )}

              <button type="submit" disabled={status === "sending"} className="btn btn-primary btn-lg w-full justify-center disabled:opacity-60">
                {status === "sending" ? "Enviando..." : "Enviar meu interesse"}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
