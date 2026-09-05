"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function ContactForm() {
  const [form, setForm] = useState({ nome: "", email: "", empresa: "", mensagem: "" });

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato pelo site — ${form.nome || "sem nome"}`);
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nEmail: ${form.email}\nEmpresa: ${form.empresa}\n\n${form.mensagem}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
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
      <button type="submit" className="btn btn-primary btn-lg w-full">Enviar mensagem</button>
    </form>
  );
}
