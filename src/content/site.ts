// Contenido editable de la empresa. PROVISIONAL = pendiente de confirmar.
export const site = {
  name: "BRORO",
  tagline: "Software que cambia cómo se resuelven los problemas", // PROVISIONAL
  description: "BRORO desarrolla software a medida, apps Android y aplicaciones web.", // PROVISIONAL
  email: "BroroTechnologies@outlook.com",
  role: "CEO", // cargo del fundador (dato confirmado)
  services: [
    "Desarrollo de software a medida",
    "Aplicaciones Android",
    "Aplicaciones web",
    "Y más (por definir)", // PROVISIONAL
  ],
} as const;

export const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const legalNav = [
  { href: "/legal/privacidad", label: "Privacidad" },
  { href: "/legal/terminos", label: "Términos" },
] as const;
