import { useState } from "react";
import Icon from "@/components/ui/icon";

const tours = [
  {
    id: 1,
    title: "Эльбрус: Покорение вершины",
    location: "Кабардино-Балкарская Республика",
    duration: "8 дней",
    difficulty: "Экстремальный",
    price: "89 000 ₽",
    image: "https://cdn.poehali.dev/projects/b3f12bfb-4c02-4b7d-87cf-0ad0a16299ff/files/b94f4ca5-6610-41c8-a70c-0c13a0b86b18.jpg",
    description:
      "Покорение самой высокой вершины России и Европы (5 642 м). Маршрут через ледники, ночевки в горных приютах, акклиматизация и финальный штурм вершины.",
    tags: ["Альпинизм", "Высокогорье", "Ледники"],
    icon: "Mountain",
  },
  {
    id: 2,
    title: "Алтай: Рафтинг по Катуни",
    location: "Республика Алтай",
    duration: "6 дней",
    difficulty: "Высокий",
    price: "54 000 ₽",
    image: "https://cdn.poehali.dev/projects/b3f12bfb-4c02-4b7d-87cf-0ad0a16299ff/files/bf56f7fd-475a-4b8a-9e77-486aaea34cf6.jpg",
    description:
      "Экстремальный сплав по реке Катунь — одной из мощнейших рек Сибири. Пороги 4–5 категории сложности, бирюзовые воды и величественные горные пейзажи.",
    tags: ["Рафтинг", "Пороги", "Горные реки"],
    icon: "Waves",
  },
  {
    id: 3,
    title: "Байкал: Зимнее дайвинг",
    location: "Иркутская область",
    duration: "5 дней",
    difficulty: "Экстремальный",
    price: "72 000 ₽",
    image: "https://cdn.poehali.dev/projects/b3f12bfb-4c02-4b7d-87cf-0ad0a16299ff/files/fc84107d-6be9-4db5-906b-245871584273.jpg",
    description:
      "Подледное погружение в самое глубокое и чистое озеро мира. Кристально прозрачная вода, уникальная байкальская фауна и незабываемый опыт дайвинга подо льдом.",
    tags: ["Дайвинг", "Подлёд", "Зима"],
    icon: "Anchor",
  },
  {
    id: 4,
    title: "Камчатка: Вулканы с воздуха",
    location: "Камчатский край",
    duration: "10 дней",
    difficulty: "Высокий",
    price: "145 000 ₽",
    image: "https://cdn.poehali.dev/projects/b3f12bfb-4c02-4b7d-87cf-0ad0a16299ff/files/bfaab591-4386-4889-b348-c8f9b551a495.jpg",
    description:
      "Вертолётные туры над действующими вулканами, восхождение на Авачинский вулкан, термальные источники и Долина гейзеров. Камчатка — земля огня и льда.",
    tags: ["Вертолёт", "Вулканы", "Гейзеры"],
    icon: "Flame",
  },
  {
    id: 5,
    title: "Кавказ: Параглайдинг",
    location: "Карачаево-Черкесская Республика",
    duration: "7 дней",
    difficulty: "Высокий",
    price: "67 000 ₽",
    image: "https://cdn.poehali.dev/projects/b3f12bfb-4c02-4b7d-87cf-0ad0a16299ff/files/3799a2bb-f078-4dab-bdd6-8ebb9f8b518b.jpg",
    description:
      "Полёты над Кавказскими горами с опытными инструкторами. Стартовые площадки на высоте 2500 м, маршруты над ущельями и панорамные виды на снежные вершины.",
    tags: ["Параглайдинг", "Полёты", "Горы"],
    icon: "Wind",
  },
];

const difficultyColor: Record<string, string> = {
  "Высокий": "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
  "Экстремальный": "bg-red-500/20 text-red-400 border-red-500/40",
};

interface TourModalProps {
  tour: typeof tours[0];
  onClose: () => void;
  onBook: () => void;
}

const TourModal = ({ tour, onClose, onBook }: TourModalProps) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="bg-[hsl(270,55%,12%)] border border-[hsl(270,30%,22%)] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(147,51,234,0.4)]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-64 rounded-t-2xl overflow-hidden">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(270,55%,12%)] to-transparent" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:text-orange-accent"
        >
          <Icon name="X" size={20} />
        </button>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tour.tags.map((tag) => (
            <span key={tag} className="text-xs font-montserrat bg-orange-accent/10 text-orange-accent border border-orange-accent/30 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-oswald text-2xl font-bold text-white mb-2">{tour.title}</h3>
        <div className="flex items-center gap-2 text-white/50 text-sm font-montserrat mb-4">
          <Icon name="MapPin" size={14} />
          {tour.location}
        </div>
        <p className="font-montserrat text-white/70 leading-relaxed mb-6">{tour.description}</p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-[hsl(270,50%,18%)] rounded-xl p-3 text-center">
            <div className="text-orange-accent mb-1"><Icon name="Clock" size={16} className="mx-auto" /></div>
            <div className="font-oswald text-lg text-white">{tour.duration}</div>
            <div className="font-montserrat text-xs text-white/40">Длительность</div>
          </div>
          <div className="bg-[hsl(270,50%,18%)] rounded-xl p-3 text-center">
            <div className="text-orange-accent mb-1"><Icon name="Zap" size={16} className="mx-auto" /></div>
            <div className="font-oswald text-sm text-white">{tour.difficulty}</div>
            <div className="font-montserrat text-xs text-white/40">Сложность</div>
          </div>
          <div className="bg-[hsl(270,50%,18%)] rounded-xl p-3 text-center">
            <div className="text-orange-accent mb-1"><Icon name="Wallet" size={16} className="mx-auto" /></div>
            <div className="font-oswald text-lg text-white">{tour.price}</div>
            <div className="font-montserrat text-xs text-white/40">Стоимость</div>
          </div>
        </div>
        <button
          onClick={onBook}
          className="btn-orange w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2"
        >
          <Icon name="Send" size={18} />
          Записаться на тур
        </button>
      </div>
    </div>
  </div>
);

const Tours = () => {
  const [selectedTour, setSelectedTour] = useState<typeof tours[0] | null>(null);

  const handleBook = () => {
    setSelectedTour(null);
    const el = document.querySelector("#contacts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tours" className="py-24 bg-[hsl(270,60%,8%)] relative">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-orange-accent/50 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-montserrat text-orange-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Наши маршруты
          </span>
          <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white uppercase tracking-wide mb-4">
            Туры по <span className="text-gradient-orange">России</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="font-montserrat text-white/60 max-w-xl mx-auto">
            5 уникальных экстремальных маршрутов — от покорения Эльбруса до подлёдного дайвинга на Байкале
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, index) => (
            <div
              key={tour.id}
              className="group bg-[hsl(270,55%,12%)] border border-[hsl(270,30%,22%)] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedTour(tour)}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(270,55%,12%)] via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-montserrat font-semibold px-2.5 py-1 rounded-full border ${difficultyColor[tour.difficulty]}`}>
                    {tour.difficulty}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-orange-accent/90 rounded-full p-2">
                  <Icon name={tour.icon} size={16} className="text-white" fallback="Mountain" />
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-white/40 text-xs font-montserrat mb-2">
                  <Icon name="MapPin" size={12} />
                  {tour.location}
                </div>
                <h3 className="font-oswald text-xl font-bold text-white mb-3 group-hover:text-orange-accent transition-colors leading-tight">
                  {tour.title}
                </h3>
                <p className="font-montserrat text-sm text-white/55 mb-4 line-clamp-2 leading-relaxed">
                  {tour.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tour.tags.map((tag) => (
                    <span key={tag} className="text-xs font-montserrat bg-orange-accent/10 text-orange-accent/80 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[hsl(270,30%,20%)]">
                  <div className="flex items-center gap-3 text-white/50 text-xs font-montserrat">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={12} />
                      {tour.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-oswald text-xl font-bold text-orange-accent">
                      {tour.price}
                    </span>
                  </div>
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedTour(tour); }}
                  className="btn-orange w-full py-3 rounded-xl text-sm font-bold mt-4 flex items-center justify-center gap-2"
                >
                  Подробнее
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTour && (
        <TourModal
          tour={selectedTour}
          onClose={() => setSelectedTour(null)}
          onBook={handleBook}
        />
      )}
    </section>
  );
};

export default Tours;