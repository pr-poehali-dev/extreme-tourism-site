import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Туры", href: "#tours" },
  { label: "О нас", href: "#about" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(270,60%,8%)] shadow-[0_4px_30px_rgba(147,51,234,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-orange-accent rounded-full flex items-center justify-center animate-pulse-orange">
            <Icon name="Mountain" size={22} className="text-white" />
          </div>
          <div className="text-left">
            <div className="font-oswald text-xl font-bold text-white leading-tight tracking-wide">
              ПИК
            </div>
            <div className="font-oswald text-xs font-light text-orange-accent tracking-widest uppercase leading-tight">
              Приключений
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-montserrat text-sm font-medium text-white/80 hover:text-orange-accent transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => handleNavClick("#contacts")}
          className="hidden md:flex btn-orange px-6 py-2.5 rounded-lg text-sm font-semibold"
        >
          Записаться
        </button>

        {/* Burger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[hsl(270,55%,12%)] border-t border-[hsl(270,30%,22%)] px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-montserrat text-base font-medium text-white/90 hover:text-orange-accent transition-colors text-left py-2 border-b border-white/10"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contacts")}
            className="btn-orange px-6 py-3 rounded-lg text-sm font-semibold mt-2"
          >
            Записаться на тур
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
