import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_CANDLES = 'https://cdn.poehali.dev/projects/15b929c3-e80a-466d-8acf-73ba9904f36c/files/4a5b11f3-3340-4676-9613-ee99ac29736e.jpg';
const PRAYING = 'https://cdn.poehali.dev/projects/15b929c3-e80a-466d-8acf-73ba9904f36c/files/d3a15eb1-5a32-4cc9-a4fe-bc1eb2e30fd4.jpg';
const ICONS_IMG = 'https://cdn.poehali.dev/projects/15b929c3-e80a-466d-8acf-73ba9904f36c/files/675838a2-adc2-4d75-a92b-8df232896982.jpg';

const candles = [
  {
    name: 'Восковые храмовые',
    desc: 'Классические свечи из натурального пчелиного воска для богослужений и личной молитвы.',
    size: '№ 20 · 30 см',
    price: '320 ₽',
    icon: 'Flame',
  },
  {
    name: 'Свечи поминальные',
    desc: 'Тонкие свечи спокойного горения — для поминовения усопших и тихих минут памяти.',
    size: '№ 60 · 18 см',
    price: '180 ₽',
    icon: 'Heart',
  },
  {
    name: 'Венчальные',
    desc: 'Праздничные украшенные свечи для таинства венчания. Ровное золотое пламя.',
    size: 'Пара · 40 см',
    price: '1 250 ₽',
    icon: 'Sparkles',
  },
  {
    name: 'Домашние молитвенные',
    desc: 'Небольшие свечи для красного угла и домашнего иконостаса. Долгое горение.',
    size: '№ 80 · 12 см',
    price: '140 ₽',
    icon: 'Home',
  },
  {
    name: 'Праздничные пасхальные',
    desc: 'Свечи с тиснёным орнаментом для Светлого Христова Воскресения и крестного хода.',
    size: '№ 40 · 25 см',
    price: '420 ₽',
    icon: 'Cross',
  },
  {
    name: 'Свечи-обетные',
    desc: 'Толстые свечи длительного горения для обетной молитвы и благодарения.',
    size: '№ 10 · 35 см',
    price: '560 ₽',
    icon: 'Gift',
  },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="container flex items-center justify-between h-20">
          <a href="#top" className="flex items-center gap-2.5">
            <Icon name="Flame" className="text-primary animate-flicker" size={26} />
            <span className="font-display text-2xl font-semibold tracking-wide">Свет Веры</span>
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="hover:text-primary transition-colors">О свечах</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" className="hidden md:inline-flex border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
            <Icon name="ShoppingBag" size={18} className="mr-2" /> Корзина
          </Button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden container pb-5 flex flex-col gap-4 text-sm animate-fade-in">
            <a href="#catalog" onClick={() => setMenuOpen(false)}>Каталог</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>О свечах</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Контакты</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-20">
        <div className="container grid lg:grid-cols-2 gap-12 items-center min-h-[88vh] py-16">
          <div className="animate-float-up">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary mb-7">
              <span className="h-px w-8 bg-primary/50" /> Свечи ручной работы
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] font-medium mb-7">
              Тёплый свет<br />вашей молитвы
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
              Натуральные восковые свечи для храма и дома. Спокойное золотое пламя,
              созданное с заботой и тишиной.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 h-13 text-base shadow-lg shadow-primary/20">
                <a href="#catalog" className="flex items-center">
                  Смотреть каталог <Icon name="ArrowRight" size={18} className="ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="rounded-full px-8 text-base hover:bg-accent">
                <a href="#about">О наших свечах</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-float-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/15 to-transparent blur-3xl rounded-full" />
            <img
              src={HERO_CANDLES}
              alt="Горящие церковные свечи"
              className="relative rounded-[2rem] shadow-2xl shadow-primary/20 object-cover w-full h-[34rem] md:h-[40rem]"
            />
          </div>
        </div>
      </section>

      {/* Icons Saints Banner */}
      <section className="py-16 bg-accent/30 border-y border-border/50">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4">Православные иконы</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-5 leading-tight">
              Свечи перед<br />ликами святых
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Зажечь свечу у иконы — древняя православная традиция. Тихое пламя несёт наши молитвы к Богородице, Господу и святым угодникам.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Господь Вседержитель', 'Богородица', 'Николай Чудотворец', 'Серафим Саровский'].map((saint) => (
                <span key={saint} className="text-xs px-4 py-2 rounded-full bg-card border border-border text-muted-foreground">
                  {saint}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent blur-2xl rounded-full" />
            <img
              src={ICONS_IMG}
              alt="Православные иконы в золотых окладах"
              className="relative rounded-2xl shadow-xl shadow-primary/15 object-cover w-full h-72 md:h-96"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/60">
              <p className="font-display text-lg font-medium mb-0.5">Свечи к иконам</p>
              <p className="text-xs text-muted-foreground">Подберём нужную свечу к любому образу</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-24 bg-secondary/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4">Наш каталог</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-5">Виды церковных свечей</h2>
            <p className="text-muted-foreground">
              Каждая свеча изготовлена из натурального воска и подходит для своего особого момента.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {candles.map((c, i) => (
              <div
                key={c.name}
                className="group bg-card rounded-2xl border border-border/70 p-8 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name={c.icon} size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{c.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{c.desc}</p>
                <div className="flex items-center justify-between pt-5 border-t border-border/60">
                  <span className="text-xs text-muted-foreground">{c.size}</span>
                  <span className="font-display text-xl font-semibold text-primary">{c.price}</span>
                </div>
                <Button variant="outline" className="w-full mt-5 rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Plus" size={16} className="mr-1.5" /> В корзину
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 bg-gradient-to-bl from-primary/10 to-transparent blur-3xl rounded-full" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 w-full h-[42rem]">
              <img
                src={PRAYING}
                alt="Молящаяся девушка у свечей"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />
              <div className="absolute inset-0" style={{ backdropFilter: 'blur(1.5px)', WebkitBackdropFilter: 'blur(1.5px)', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, black 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, black 100%)' }} />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4">О свечах</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-7 leading-tight">
              Свеча — это видимая молитва
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Зажжённая свеча выражает теплоту и пламень любви человека к тому, кому он молится.
              Её тихий свет сопровождает каждое искреннее обращение к Богу.
            </p>
            <div className="space-y-5 mt-10">
              {[
                { icon: 'Leaf', t: 'Натуральный воск', d: 'Только пчелиный и растительный воск без примесей.' },
                { icon: 'Hand', t: 'Ручная работа', d: 'Каждая свеча отлита и проверена вручную.' },
                { icon: 'Clock', t: 'Долгое ровное горение', d: 'Спокойное золотое пламя без копоти.' },
              ].map((f) => (
                <div key={f.t} className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Icon name={f.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-0.5">{f.t}</h4>
                    <p className="text-sm text-muted-foreground">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 bg-secondary/40">
        <div className="container">
          <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-[2.5rem] px-8 md:px-16 py-16 text-center text-primary-foreground overflow-hidden">
            <Icon name="Flame" size={120} className="absolute -top-6 -right-6 opacity-10 animate-flicker" />
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-5">Закажите свечи в храм или дом</h2>
            <p className="max-w-xl mx-auto mb-10 opacity-90">
              Доставим свечи бережно упакованными. Напишите нам — поможем подобрать.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full px-8 h-13 text-base">
                <Icon name="Phone" size={18} className="mr-2" /> +7 (900) 000-00-00
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-13 text-base bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Icon name="Mail" size={18} className="mr-2" /> Написать письмо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/60">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <Icon name="Flame" className="text-primary" size={22} />
            <span className="font-display text-xl font-semibold text-foreground">Свет Веры</span>
          </div>
          <p>© 2026 Свет Веры · Церковные свечи ручной работы</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary transition-colors"><Icon name="Send" size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Icon name="Instagram" size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;