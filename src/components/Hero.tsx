import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToTours = () => {
    const el = document.querySelector("#tours");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContacts = () => {
    const el = document.querySelector("#contacts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/b3f12bfb-4c02-4b7d-87cf-0ad0a16299ff/files/11443c88-4b00-495a-ba73-ff5e6d802c99.jpg)`,
        }}
      />
      {/* Dark overlay with violet tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(270,60%,5%)]/70 via-[hsl(270,60%,8%)]/50 to-[hsl(270,60%,8%)]" />
      {/* Orange glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-accent/10 blur-[100px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <span className="inline-block font-montserrat text-orange-accent text-sm font-semibold tracking-[0.3em] uppercase mb-6 border border-orange-accent/40 px-4 py-1.5 rounded-full">
            Экстремальный туризм по России
          </span>
        </div>

        <h1 className="animate-fade-in-delay-1 font-oswald text-6xl md:text-8xl font-bold text-white leading-none mb-4 uppercase tracking-wide">
          Покори{" "}
          <span className="text-gradient-orange">вершины</span>
          <br />
          России
        </h1>

        <p className="animate-fade-in-delay-2 font-montserrat text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Эльбрус, Байкал, Камчатка, Алтай, Кавказ — реальные приключения для
          тех, кто не боится адреналина и жаждет настоящих эмоций
        </p>

        <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToTours}
            className="btn-orange px-10 py-4 rounded-xl text-base font-bold flex items-center gap-2 shadow-[0_0_30px_rgba(255,120,0,0.4)]"
          >
            <Icon name="Compass" size={20} />
            Смотреть туры
          </button>
          <button
            onClick={scrollToContacts}
            className="btn-outline-orange px-10 py-4 rounded-xl text-base font-bold flex items-center gap-2"
          >
            <Icon name="Phone" size={20} />
            Позвонить нам
          </button>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-delay-3 grid grid-cols-3 gap-6 max-w-md mx-auto mt-16">
          {[
            { value: "5+", label: "лет опыта" },
            { value: "300+", label: "туристов" },
            { value: "100%", label: "безопасность" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-oswald text-3xl font-bold text-orange-accent">
                {stat.value}
              </div>
              <div className="font-montserrat text-xs text-white/50 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToTours}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-orange-accent transition-colors animate-bounce"
      >
        <span className="font-montserrat text-xs tracking-widest uppercase">
          Листай
        </span>
        <Icon name="ChevronDown" size={20} />
      </button>
    </section>
  );
};

export default Hero;
