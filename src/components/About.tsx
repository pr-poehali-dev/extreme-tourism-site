import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Shield",
    title: "Безопасность прежде всего",
    text: "Все маршруты разработаны опытными инструкторами. Сертифицированное снаряжение, страховка и медицинское сопровождение.",
  },
  {
    icon: "Users",
    title: "Опытные гиды",
    text: "Наши инструкторы — профессиональные альпинисты, спасатели МЧС и чемпионы по экстремальным видам спорта.",
  },
  {
    icon: "Map",
    title: "Уникальные маршруты",
    text: "Мы открываем места, куда не ступает нога обычного туриста. Только реальная дикая природа России.",
  },
  {
    icon: "Award",
    title: "Лицензия и аккредитация",
    text: "Официальная лицензия турагентства, аккредитация в Министерстве туризма РФ, член Российского союза туриндустрии.",
  },
];

const team = [
  {
    name: "Алексей Воронов",
    role: "Основатель и главный гид",
    desc: "Мастер спорта по альпинизму, покорил Эльбрус 47 раз",
    emoji: "🧗",
  },
  {
    name: "Марина Климова",
    role: "Инструктор по водному туризму",
    desc: "КМС по гребному слалому, 12 лет на реках Сибири",
    emoji: "🏄",
  },
  {
    name: "Дмитрий Захаров",
    role: "Вертолётный оператор, Камчатка",
    desc: "Лётчик I класса, 3000+ часов над вулканами",
    emoji: "🚁",
  },
];

const About = () => {
  const scrollToContacts = () => {
    const el = document.querySelector("#contacts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 bg-[hsl(270,55%,10%)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[hsl(270,60%,25%)]/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-montserrat text-orange-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Кто мы
          </span>
          <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white uppercase tracking-wide mb-4">
            О компании <span className="text-gradient-orange">«Пик»</span>
          </h2>
          <div className="section-divider mb-6" />
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="font-montserrat text-white/70 text-lg leading-relaxed mb-6">
              <span className="text-orange-accent font-semibold">«Пик приключений»</span> — турагентство
              экстремального туризма, основанное в 2018 году командой профессиональных
              спортсменов и путешественников.
            </p>
            <p className="font-montserrat text-white/60 leading-relaxed mb-8">
              Мы верим, что настоящие впечатления живут за пределами зоны комфорта.
              Наша миссия — дать каждому возможность почувствовать мощь дикой природы
              России: от вечных льдов Байкала до огненных кратеров Камчатки.
            </p>
            <button
              onClick={scrollToContacts}
              className="btn-orange px-8 py-3.5 rounded-xl font-bold flex items-center gap-2"
            >
              <Icon name="MessageCircle" size={18} />
              Связаться с нами
            </button>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[hsl(270,50%,14%)] border border-[hsl(270,30%,22%)] rounded-xl p-5 hover:border-orange-accent/40 transition-colors group"
              >
                <div className="w-10 h-10 bg-orange-accent/15 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-accent/25 transition-colors">
                  <Icon name={f.icon} size={20} className="text-orange-accent" />
                </div>
                <h4 className="font-oswald text-base font-bold text-white mb-1.5">
                  {f.title}
                </h4>
                <p className="font-montserrat text-xs text-white/50 leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="font-oswald text-3xl font-bold text-white text-center mb-10 uppercase">
            Наша <span className="text-gradient-orange">команда</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[hsl(270,50%,14%)] border border-[hsl(270,30%,22%)] rounded-2xl p-6 text-center hover:border-orange-accent/40 hover:shadow-[0_0_30px_rgba(255,120,0,0.15)] transition-all"
              >
                <div className="w-16 h-16 bg-orange-accent/15 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  {member.emoji}
                </div>
                <h4 className="font-oswald text-lg font-bold text-white mb-1">
                  {member.name}
                </h4>
                <div className="font-montserrat text-xs text-orange-accent font-semibold tracking-wider uppercase mb-3">
                  {member.role}
                </div>
                <p className="font-montserrat text-sm text-white/50 leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
