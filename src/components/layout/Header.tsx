import { Logo } from "./Logo";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { NavLinks, MobileNav } from "./Nav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { localePath, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";

export function Header({ lang, dict }: { lang: Locale; dict: Dict }) {
  const items = dict.nav.map((n) => ({ href: localePath(lang, n.path), label: n.label }));
  const cta = { href: localePath(lang, "/contacto"), label: dict.common.talk };
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-ink-950/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Logo lang={lang} label={dict.common.logoLabel} />
        <NavLinks items={items} label={dict.common.mainNav} />
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher lang={lang} label={dict.common.language} className="hidden md:inline-flex" />
          <div className="hidden lg:block"><Button href={cta.href} className="!py-2">{cta.label}</Button></div>
          <MobileNav items={items} lang={lang} navLabel={dict.common.mobileNav} open={dict.common.openMenu} close={dict.common.closeMenu} languageLabel={dict.common.language} cta={cta} />
        </div>
      </Container>
    </header>
  );
}
