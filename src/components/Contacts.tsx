import { useState } from "react";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", phone: "", tour: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", tour: "", message: "" });
  };

  return (
    <section id="contacts" className="py-24 bg-[hsl(270,55%,10%)] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-orange-accent/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="font-montserrat text-orange-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Свяжитесь с нами
          </span>
          <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white uppercase tracking-wide mb-4">
            Записаться <span className="text-gradient-orange">на тур</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="font-montserrat text-white/60 max-w-xl mx-auto">
            Оставьте заявку — наш менеджер свяжется с вами в течение 30 минут
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="font-oswald text-2xl font-bold text-white mb-6 uppercase">
              Контактная информация
            </h3>

            {/* Phone */}
            <a
              href="tel:+79511325414"
              className="flex items-center gap-4 bg-[hsl(270,50%,14%)] border border-[hsl(270,30%,22%)] rounded-xl p-5 hover:border-orange-accent/50 hover:shadow-[0_0_25px_rgba(255,120,0,0.15)] transition-all group"
            >
              <div className="w-12 h-12 bg-orange-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon name="Phone" size={22} className="text-white" />
              </div>
              <div>
                <div className="font-montserrat text-xs text-white/40 uppercase tracking-wider mb-0.5">
                  Телефон
                </div>
                <div className="font-oswald text-xl font-bold text-white group-hover:text-orange-accent transition-colors">
                  +7 951 132-54-14
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/79511325414"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[hsl(270,50%,14%)] border border-[hsl(270,30%,22%)] rounded-xl p-5 hover:border-orange-accent/50 hover:shadow-[0_0_25px_rgba(255,120,0,0.15)] transition-all group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon name="MessageCircle" size={22} className="text-white" />
              </div>
              <div>
                <div className="font-montserrat text-xs text-white/40 uppercase tracking-wider mb-0.5">
                  WhatsApp
                </div>
                <div className="font-oswald text-xl font-bold text-white group-hover:text-orange-accent transition-colors">
                  +7 951 132-54-14
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@pikpriklyucheniy.ru"
              className="flex items-center gap-4 bg-[hsl(270,50%,14%)] border border-[hsl(270,30%,22%)] rounded-xl p-5 hover:border-orange-accent/50 hover:shadow-[0_0_25px_rgba(255,120,0,0.15)] transition-all group"
            >
              <div className="w-12 h-12 bg-[hsl(270,60%,35%)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon name="Mail" size={22} className="text-white" />
              </div>
              <div>
                <div className="font-montserrat text-xs text-white/40 uppercase tracking-wider mb-0.5">
                  Email
                </div>
                <div className="font-oswald text-lg font-bold text-white group-hover:text-orange-accent transition-colors">
                  info@pikpriklyucheniy.ru
                </div>
              </div>
            </a>

            {/* Working hours */}
            <div className="bg-orange-accent/10 border border-orange-accent/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Clock" size={18} className="text-orange-accent" />
                <span className="font-oswald text-lg font-bold text-white">Режим работы</span>
              </div>
              <p className="font-montserrat text-sm text-white/70 ml-7">
                Пн–Пт: 9:00 – 20:00<br />
                Сб–Вс: 10:00 – 18:00
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[hsl(270,50%,12%)] border border-[hsl(270,30%,22%)] rounded-2xl p-8">
            <h3 className="font-oswald text-2xl font-bold text-white mb-6 uppercase">
              Оставить заявку
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <div className="w-16 h-16 bg-orange-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" size={32} className="text-orange-accent" />
                </div>
                <h4 className="font-oswald text-xl font-bold text-white mb-2">Заявка принята!</h4>
                <p className="font-montserrat text-white/60 text-sm">
                  Мы свяжемся с вами в течение 30 минут
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-montserrat text-xs text-white/50 uppercase tracking-wider block mb-1.5">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Иван Иванов"
                    className="w-full bg-[hsl(270,45%,16%)] border border-[hsl(270,30%,25%)] rounded-xl px-4 py-3 font-montserrat text-sm text-white placeholder-white/30 focus:outline-none focus:border-orange-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="font-montserrat text-xs text-white/50 uppercase tracking-wider block mb-1.5">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+7 900 000-00-00"
                    className="w-full bg-[hsl(270,45%,16%)] border border-[hsl(270,30%,25%)] rounded-xl px-4 py-3 font-montserrat text-sm text-white placeholder-white/30 focus:outline-none focus:border-orange-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="font-montserrat text-xs text-white/50 uppercase tracking-wider block mb-1.5">
                    Интересующий тур
                  </label>
                  <select
                    name="tour"
                    value={form.tour}
                    onChange={handleChange}
                    className="w-full bg-[hsl(270,45%,16%)] border border-[hsl(270,30%,25%)] rounded-xl px-4 py-3 font-montserrat text-sm text-white focus:outline-none focus:border-orange-accent transition-colors appearance-none"
                  >
                    <option value="" className="bg-[hsl(270,55%,15%)]">Выберите тур...</option>
                    <option value="elbrus" className="bg-[hsl(270,55%,15%)]">Эльбрус: Покорение вершины</option>
                    <option value="altai" className="bg-[hsl(270,55%,15%)]">Алтай: Рафтинг по Катуни</option>
                    <option value="baikal" className="bg-[hsl(270,55%,15%)]">Байкал: Зимнее дайвинг</option>
                    <option value="kamchatka" className="bg-[hsl(270,55%,15%)]">Камчатка: Вулканы с воздуха</option>
                    <option value="caucasus" className="bg-[hsl(270,55%,15%)]">Кавказ: Параглайдинг</option>
                  </select>
                </div>

                <div>
                  <label className="font-montserrat text-xs text-white/50 uppercase tracking-wider block mb-1.5">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Расскажите о себе: опыт, физическая подготовка, пожелания..."
                    className="w-full bg-[hsl(270,45%,16%)] border border-[hsl(270,30%,25%)] rounded-xl px-4 py-3 font-montserrat text-sm text-white placeholder-white/30 focus:outline-none focus:border-orange-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-orange w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,120,0,0.3)]"
                >
                  <Icon name="Send" size={18} />
                  Отправить заявку
                </button>

                <p className="font-montserrat text-xs text-white/30 text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
