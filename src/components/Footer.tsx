import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Туры", href: "#tours" },
  { label: "О нас", href: "#about" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[hsl(270,65%,5%)] border-t border-[hsl(270,30%,15%)] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo & desc */}
          <div>
            <button onClick={() => scrollTo("#hero")} className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-accent rounded-full flex items-center justify-center">
                <Icon name="Mountain" size={20} className="text-white" />
              </div>
              <div>
                <div className="font-oswald text-xl font-bold text-white leading-tight">ПИК</div>
                <div className="font-oswald text-xs text-orange-accent tracking-widest uppercase">Приключений</div>
              </div>
            </button>
            <p className="font-montserrat text-sm text-white/40 leading-relaxed max-w-xs">
              Экстремальный туризм по России. Реальные приключения для настоящих смельчаков.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-oswald text-base font-bold text-white uppercase tracking-wider mb-4">
              Навигация
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-montserrat text-sm text-white/50 hover:text-orange-accent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-oswald text-base font-bold text-white uppercase tracking-wider mb-4">
              Контакты
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+79511325414"
                className="flex items-center gap-3 font-montserrat text-sm text-white/50 hover:text-orange-accent"
              >
                <Icon name="Phone" size={14} className="text-orange-accent" />
                +7 951 132-54-14
              </a>
              <a
                href="https://wa.me/79511325414"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-montserrat text-sm text-white/50 hover:text-orange-accent"
              >
                <Icon name="MessageCircle" size={14} className="text-orange-accent" />
                WhatsApp
              </a>
              <a
                href="mailto:info@pikpriklyucheniy.ru"
                className="flex items-center gap-3 font-montserrat text-sm text-white/50 hover:text-orange-accent"
              >
                <Icon name="Mail" size={14} className="text-orange-accent" />
                info@pikpriklyucheniy.ru
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[hsl(270,30%,13%)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-montserrat text-xs text-white/25">
            © 2024 «Пик приключений». Все права защищены.
          </p>
          <p className="font-montserrat text-xs text-white/25">
            Лицензия турагента РТО-001247
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;