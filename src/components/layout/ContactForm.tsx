"use client";
import { useState } from "react";
import { z } from "zod";
import { site } from "@/content/site";

const schema = z.object({
  nombre: z.string().trim().min(2, "Escribe tu nombre."),
  correo: z.email("Escribe un correo válido."),
  tipo: z.string().min(1, "Elige un tipo de proyecto."),
  mensaje: z.string().trim().min(10, "Cuéntanos un poco más (mínimo 10 caracteres)."),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;
const tipos = ["Software a medida", "App Android", "Aplicación web", "Otro"];
const field = "mt-2 w-full rounded-xl border border-[var(--border-soft)] bg-forest-900/60 px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-lime-300";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      for (const i of r.error.issues) errs[i.path[0] as keyof Errors] ??= i.message;
      setErrors(errs); setSent(false); return;
    }
    setErrors({});
    const { nombre, correo, tipo, mensaje } = r.data;
    const body = `Nombre: ${nombre}\nCorreo: ${correo}\nTipo de proyecto: ${tipo}\n\n${mensaje}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Consulta web: ${tipo}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const err = (k: keyof Errors) => errors[k] && <p id={`${k}-err`} role="alert" className="mt-1 text-xs text-red-300">{errors[k]}</p>;
  const aria = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl border border-[var(--border-soft)] bg-forest-800 p-7">
      <div><label htmlFor="nombre" className="text-sm font-medium">Nombre</label><input id="nombre" name="nombre" autoComplete="name" className={field} {...aria("nombre")} />{err("nombre")}</div>
      <div><label htmlFor="correo" className="text-sm font-medium">Correo</label><input id="correo" name="correo" type="email" autoComplete="email" className={field} {...aria("correo")} />{err("correo")}</div>
      <div><label htmlFor="tipo" className="text-sm font-medium">Tipo de proyecto</label>
        <select id="tipo" name="tipo" defaultValue="" className={field} {...aria("tipo")}><option value="" disabled>Elige una opción</option>{tipos.map((t) => <option key={t}>{t}</option>)}</select>{err("tipo")}</div>
      <div><label htmlFor="mensaje" className="text-sm font-medium">Mensaje</label><textarea id="mensaje" name="mensaje" rows={5} className={field} {...aria("mensaje")} />{err("mensaje")}</div>
      <button type="submit" className="rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">Preparar correo</button>
      <p className="text-xs text-muted">Este formulario abre tu aplicación de correo con el mensaje ya redactado; no se guarda nada en el sitio. Si no se abre, escribe a <a className="text-lime-300 underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
      {sent && <p role="status" className="text-sm text-lime-300">Listo: revisa tu aplicación de correo y pulsa enviar.</p>}
    </form>
  );
}
