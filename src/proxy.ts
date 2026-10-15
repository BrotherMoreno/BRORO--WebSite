import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

function detectLocale(req: NextRequest): string {
  for (const part of (req.headers.get("accept-language") ?? "").split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase().slice(0, 2);
    if ((locales as readonly string[]).includes(tag)) return tag;
  }
  return defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return;
  req.nextUrl.pathname = `/${detectLocale(req)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(req.nextUrl);
}

// Excluye internos de Next y cualquier archivo con extensión (imágenes, favicon, etc.).
export const config = { matcher: ["/((?!_next|api|.*\\..*).*)"] };
