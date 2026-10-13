import { Logo } from "./Logo";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { NavLinks, MobileNav } from "./Nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-ink-950/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <NavLinks />
        <div className="flex items-center gap-3">
          <Button href="/contacto" className="hidden !py-2 md:inline-flex">Hablemos</Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
