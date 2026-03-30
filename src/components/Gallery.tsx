import { useState } from "react";
import Icon from "@/components/ui/icon";

const galleryItems = [
  {
    src: "https://cdn.poehali.dev/projects/b3f12bfb-4c02-4b7d-87cf-0ad0a16299ff/files/b94f4ca5-6610-41c8-a70c-0c13a0b86b18.jpg",
    title: "Эльбрус на рассвете",
    tag: "Альпинизм",
  },
  {
    src: "https://cdn.poehali.dev/projects/b3f12bfb-4c02-4b7d-87cf-0ad0a16299ff/files/bf56f7fd-475a-4b8a-9e77-486aaea34cf6.jpg",
    title: "Пороги реки Катунь",
    tag: "Рафтинг",
  },
  {
    src: "https://cdn.poehali.dev/projects/b3f12bfb-4c02-4b7d-87cf-0ad0a16299ff/files/fc84107d-6be9-4db5-906b-245871584273.jpg",
    title: "Байкальский лёд",
    tag: "Дайвинг",
  },
  {
    src: "https://cdn.poehali.dev/projects/b3f12bfb-4c02-4b7d-87cf-0ad0a16299ff/files/bfaab591-4386-4889-b348-c8f9b551a495.jpg",
    title: "Вулканы Камчатки",
    tag: "Вертолёт",
  },
  {
    src: "https://cdn.poehali.dev/projects/b3f12bfb-4c02-4b7d-87cf-0ad0a16299ff/files/3799a2bb-f078-4dab-bdd6-8ebb9f8b518b.jpg",
    title: "Параглайдинг на Кавказе",
    tag: "Параглайдинг",
  },
  {
    src: "https://cdn.poehali.dev/projects/b3f12bfb-4c02-4b7d-87cf-0ad0a16299ff/files/11443c88-4b00-495a-ba73-ff5e6d802c99.jpg",
    title: "Дикая природа России",
    tag: "Пейзаж",
  },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[hsl(270,60%,8%)] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-orange-accent/50 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-montserrat text-orange-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Наши фотографии
          </span>
          <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white uppercase tracking-wide mb-4">
            Галерея <span className="text-gradient-orange">маршрутов</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="font-montserrat text-white/60 max-w-xl mx-auto">
            Реальные снимки с наших туров — красота дикой России во всей своей мощи
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? "md:row-span-1" : ""
              } ${index === 1 ? "md:col-span-1" : ""}`}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-montserrat text-orange-accent font-semibold tracking-wider uppercase mb-1">
                  {item.tag}
                </span>
                <h4 className="font-oswald text-lg font-bold text-white">
                  {item.title}
                </h4>
              </div>
              <div className="absolute top-3 right-3 bg-black/50 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="ZoomIn" size={14} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full rounded-2xl shadow-[0_0_80px_rgba(255,120,0,0.3)]"
            />
            <div className="mt-4 text-center">
              <span className="font-montserrat text-orange-accent text-sm font-semibold tracking-wider uppercase">
                {lightbox.tag}
              </span>
              <h4 className="font-oswald text-2xl font-bold text-white mt-1">
                {lightbox.title}
              </h4>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 bg-orange-accent rounded-full p-2 text-white hover:bg-orange-dark transition-colors shadow-lg"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
