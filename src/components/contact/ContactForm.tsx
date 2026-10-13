"use client";
import { useState } from "react";
import { z } from "zod";
import { Send, MessageCircle, CircleCheck, Terminal } from "lucide-react";
import { site } from "@/content/site";
import type { Dict } from "@/i18n/types";
import type { CountryOption } from "@/i18n/country-options";

type FormDict = Dict["contact"]["form"];
const makeSchema = (e: FormDict["errors"]) => z.object({
  nombre: z.string({ error: e.name }).trim().min(2, e.name),
  correo: z.email(e.email),
  telefono: z.string().refine((v) => /^\d{6,12}$/.test(v.replace(/\s/g, "")), e.phone),
  servicio: z.string({ error: e.service }).min(1, e.service),
  mensaje: z.string({ error: e.message }).trim().min(10, e.message),
});
type Errors = Partial<Record<"nombre" | "correo" | "telefono" | "servicio" | "mensaje", string>>;
type Status = "idle" | "email" | "whatsapp";

const label = "font-mono text-[11px] font-semibold uppercase tracking-widest text-on-surface";
const control = "w-full rounded-xl border border-line/40 bg-surface-2 px-4 py-3 text-base text-paper-50 placeholder:text-on-surface-variant/50 transition-colors focus-visible:border-lime-500 focus-visible:outline-2 focus-visible:outline-lime-500/40 sm:py-2.5 sm:text-sm";

export function ContactForm({ dict, countries }: { dict: FormDict; countries: CountryOption[] }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [iso, setIso] = useState(countries[0].iso);
  const country = countries.find((c) => c.iso === iso) ?? countries[0];

  function build(form: HTMLFormElement) {
    const raw = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const r = makeSchema(dict.errors).safeParse(raw);
    if (!r.success) {
      const errs: Errors = {};
      for (const i of r.error.issues) errs[i.path[0] as keyof Errors] ??= i.message;
      setErrors(errs); setStatus("idle");
      return null;
    }
    setErrors({});
    const d = r.data, m = dict.mail;
    const servicio = dict.services.find((s) => s.value === d.servicio)?.label ?? d.servicio;
    const presupuesto = dict.budgets.find((b) => b.value === raw.presupuesto)?.label ?? m.budgetDefault;
    const body = [
      `${m.name}: ${d.nombre}`, `${m.email}: ${d.correo}`, `${m.phone}: ${country.code} ${d.telefono}`, `${m.country}: ${country.name}`,
      `${m.service}: ${servicio}`, `${m.budget}: ${presupuesto}`, `${m.nda}: ${raw.nda ? m.yes : m.no}`, "", d.mensaje,
    ].join("\n");
    return { subject: `${m.subject}: ${servicio}`, body };
  }

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const m = build(e.currentTarget);
    if (!m) return;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(m.subject)}&body=${encodeURIComponent(m.body)}`;
    setStatus("email");
  }

  function sendWhatsapp(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    const m = build(form);
    if (!m) return;
    window.open(`${site.whatsapp.url}?text=${encodeURIComponent(`${m.subject}\n\n${m.body}`)}`, "_blank", "noopener,noreferrer");
    setStatus("whatsapp");
  }

  const err = (k: keyof Errors) => errors[k] && <p id={`${k}-err`} role="alert" className="mt-1 text-xs text-red-300">{errors[k]}</p>;
  const aria = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });
  const req = <span aria-hidden className="text-red-300">*</span>;

  return (
    <div className="flex flex-col gap-6 rounded-xl border border-glass bg-surface-1 p-5 shadow-xl sm:p-8">
      <div>
        <p className="inline-flex items-center gap-2 font-mono text-xs text-jade-400 sm:text-sm"><Terminal size={16} aria-hidden /> {dict.kicker}</p>
        <h2 className="mt-2 text-xl font-bold sm:text-2xl">{dict.title}</h2>
        <p className="mt-1 text-sm text-on-surface-variant">{dict.text}</p>
      </div>

      <form onSubmit={sendEmail} noValidate className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="nombre" className={label}>{dict.name} {req}</label>
            <input id="nombre" name="nombre" autoComplete="name" placeholder={dict.namePh} required className={control} {...aria("nombre")} />{err("nombre")}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="correo" className={label}>{dict.email} {req}</label>
            <input id="correo" name="correo" type="email" autoComplete="email" placeholder={dict.emailPh} required className={control} {...aria("correo")} />{err("correo")}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="telefono" className={label}>{dict.phone} {req}</label>
          <div className="grid gap-2 sm:grid-cols-12">
            <select aria-label={dict.country} name="pais" value={iso} onChange={(e) => setIso(e.target.value)} className={`${control} cursor-pointer sm:col-span-5`}>
              {countries.map((c) => <option key={c.iso} value={c.iso}>{c.name} ({c.code})</option>)}
            </select>
            <div className="flex min-w-0 rounded-xl border border-line/40 bg-surface-2 transition-colors focus-within:border-lime-500 sm:col-span-7">
              <span aria-hidden className="flex select-none items-center border-r border-line/30 px-3 text-base sm:px-4 sm:text-sm">{country.code}</span>
              <input id="telefono" name="telefono" type="tel" inputMode="tel" autoComplete="tel-national" placeholder={dict.phonePh} required
                className="w-full min-w-0 bg-transparent px-3 py-3 text-base placeholder:text-on-surface-variant/50 focus-visible:outline-none sm:px-4 sm:py-2.5 sm:text-sm" {...aria("telefono")} />
            </div>
          </div>
          {err("telefono")}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="servicio" className={label}>{dict.service} {req}</label>
            <select id="servicio" name="servicio" defaultValue="" required className={`${control} cursor-pointer`} {...aria("servicio")}>
              <option value="" disabled>{dict.servicePh}</option>
              {dict.services.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>{err("servicio")}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="presupuesto" className={label}>{dict.budget}</label>
            <select id="presupuesto" name="presupuesto" defaultValue="definir" className={`${control} cursor-pointer`}>
              {dict.budgets.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="mensaje" className={label}>{dict.message} {req}</label>
          <textarea id="mensaje" name="mensaje" rows={4} required placeholder={dict.messagePh} className={`${control} resize-none`} {...aria("mensaje")} />{err("mensaje")}
        </div>

        <div className="flex items-start gap-2.5 rounded-lg bg-surface-2/60 p-3">
          <input id="nda" name="nda" type="checkbox" className="mt-0.5 size-4 shrink-0 cursor-pointer accent-lime-500" />
          <label htmlFor="nda" className="cursor-pointer text-sm text-on-surface-variant">{dict.ndaBefore} <strong>{dict.ndaStrong}</strong> {dict.ndaAfter}</label>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime-500 px-6 py-3 text-sm font-semibold text-on-lime shadow-[0_0_20px_rgb(163_230_53/0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgb(163_230_53/0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200">
            <Send size={18} aria-hidden /> {dict.sendEmail}
          </button>
          <button type="button" onClick={sendWhatsapp} className="inline-flex items-center justify-center gap-2 rounded-xl border border-jade-400/40 px-6 py-3 text-sm font-semibold text-jade-400 transition hover:bg-jade-400/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade-400">
            <MessageCircle size={18} aria-hidden /> {dict.sendWhatsapp}
          </button>
        </div>
        <p className="text-xs text-on-surface-variant">{dict.note}</p>

        {status !== "idle" && (
          <p role="status" className="flex items-start gap-2 rounded-lg border border-lime-500/30 bg-surface-3 p-3 text-sm text-lime-500">
            <CircleCheck size={18} className="mt-0.5 shrink-0" aria-hidden />
            {status === "email" ? dict.okEmail : dict.okWhatsapp}
          </p>
        )}
      </form>
    </div>
  );
}
