// Datos editables de la empresa que no dependen del idioma. Los textos traducibles están en src/i18n/dictionaries/.
export type Social = { id: "instagram" | "tiktok" | "linkedin" | "facebook" | "youtube" | "x" | "github"; label: string; url: string };

export const site = {
  name: "BRORO",
  email: "BroroTechnologies@outlook.com",
  whatsapp: { display: "+51 929 259 109", number: "51929259109", url: "https://wa.me/51929259109" },
  // PROVISIONAL: añadir la URL real de cada perfil. Mientras url esté vacío, el icono se muestra sin enlace ("próximamente").
  socials: [
    { id: "instagram", label: "Instagram", url: "" },
    { id: "tiktok", label: "TikTok", url: "" },
    { id: "linkedin", label: "LinkedIn", url: "" },
  ] as Social[],
};
