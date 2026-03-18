import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 1,
    type: "cover",
    label: "Введение",
    number: "01",
    title: "Наградная политика\nТамбовской области",
    subtitle: "Система государственного признания заслуг граждан и организаций",
    meta: "Закон Тамбовской области «О наградах и премиях Тамбовской области»",
  },
  {
    id: 2,
    type: "toc",
    label: "Содержание",
    number: "02",
    title: "Структура презентации",
    items: [
      "Законодательная база",
      "Типы государственных наград",
      "Критерии присвоения",
      "Процедура представления",
      "Примеры награждений",
      "Статистика по годам",
      "Категории получателей",
      "Значение наградной политики",
      "Заключение",
    ],
  },
  {
    id: 3,
    type: "legislation",
    label: "Законодательство",
    number: "03",
    title: "Законодательная основа",
    blocks: [
      {
        icon: "FileText",
        heading: "Основной закон",
        text: "Закон Тамбовской области «О наградах и премиях Тамбовской области» — главный нормативный акт, определяющий виды наград, порядок и условия награждения.",
      },
      {
        icon: "Scale",
        heading: "Правовая иерархия",
        text: "Региональная наградная система действует на основании Конституции РФ и в соответствии с федеральным законодательством о государственных наградах.",
      },
      {
        icon: "Building2",
        heading: "Органы власти",
        text: "Полномочия по награждению осуществляют Администрация Тамбовской области, Тамбовская областная Дума и органы местного самоуправления.",
      },
    ],
  },
  {
    id: 4,
    type: "awards-types",
    label: "Типы наград",
    number: "04",
    title: "Виды государственных наград",
    categories: [
      {
        name: "Почётные звания",
        colorIdx: 0,
        items: [
          "Заслуженный работник отрасли",
          "Почётный гражданин Тамбовской области",
          "Почётный работник сферы",
        ],
      },
      {
        name: "Знаки отличия",
        colorIdx: 1,
        items: [
          "Знак «За заслуги перед Тамбовской областью»",
          "Почётный диплом",
          "Благодарственное письмо Губернатора",
        ],
      },
      {
        name: "Премии",
        colorIdx: 2,
        items: [
          "Премия в сфере науки и техники",
          "Премия в области культуры и искусства",
          "Молодёжные премии",
        ],
      },
    ],
  },
  {
    id: 5,
    type: "criteria",
    label: "Критерии",
    number: "05",
    title: "Критерии присвоения наград",
    criteria: [
      {
        num: "1",
        title: "Трудовой стаж",
        desc: "Не менее 10 лет в отрасли для большинства почётных званий; особые требования для высших наград",
      },
      {
        num: "2",
        title: "Вклад в развитие",
        desc: "Значительный вклад в развитие Тамбовской области, её экономики, науки, культуры или социальной сферы",
      },
      {
        num: "3",
        title: "Безупречная репутация",
        desc: "Отсутствие дисциплинарных взысканий, высокие профессиональные показатели, признание коллег",
      },
      {
        num: "4",
        title: "Предшествующие награды",
        desc: "Наличие отраслевых наград и поощрений как ступень к государственному признанию",
      },
    ],
  },
  {
    id: 6,
    type: "procedure",
    label: "Процедура",
    number: "06",
    title: "Порядок представления к награде",
    steps: [
      {
        step: "01",
        title: "Инициирование",
        desc: "Работодатель, общественная организация или орган власти подаёт ходатайство о награждении",
      },
      {
        step: "02",
        title: "Сбор документов",
        desc: "Характеристика, наградной лист, копии документов о предыдущих наградах и трудовой книжки",
      },
      {
        step: "03",
        title: "Согласование",
        desc: "Рассмотрение в профильном органе исполнительной власти и проверка соответствия критериям",
      },
      {
        step: "04",
        title: "Решение",
        desc: "Издание постановления Администрации области или иного уполномоченного органа",
      },
      {
        step: "05",
        title: "Вручение",
        desc: "Торжественное вручение в официальной обстановке на мероприятиях регионального уровня",
      },
    ],
  },
  {
    id: 7,
    type: "examples",
    label: "Примеры",
    number: "07",
    title: "Примеры наград в действии",
    examples: [
      {
        sphere: "Медицина",
        award: "Заслуженный врач",
        desc: "Врачи с многолетней практикой, спасшие тысячи жизней жителей области",
        icon: "HeartPulse",
      },
      {
        sphere: "Образование",
        award: "Заслуженный учитель",
        desc: "Педагоги, создавшие уникальные образовательные методики и воспитавшие выдающихся учеников",
        icon: "GraduationCap",
      },
      {
        sphere: "Культура",
        award: "Заслуженный деятель культуры",
        desc: "Мастера, прославляющие тамбовское искусство на российском и международном уровне",
        icon: "Palette",
      },
      {
        sphere: "Промышленность",
        award: "Заслуженный работник промышленности",
        desc: "Специалисты, модернизировавшие производство и повысившие конкурентоспособность региона",
        icon: "Factory",
      },
    ],
  },
  {
    id: 8,
    type: "stats",
    label: "Статистика",
    number: "08",
    title: "Статистика награждений",
    yearStats: [
      { year: "2019", count: 312, width: 62 },
      { year: "2020", count: 248, width: 50 },
      { year: "2021", count: 375, width: 75 },
      { year: "2022", count: 401, width: 80 },
      { year: "2023", count: 463, width: 93 },
      { year: "2024", count: 500, width: 100 },
    ],
    categories: [
      { name: "Работники образования", pct: 28 },
      { name: "Работники здравоохранения", pct: 23 },
      { name: "Работники культуры", pct: 18 },
      { name: "Промышленность и АПК", pct: 16 },
      { name: "Государственная служба", pct: 9 },
      { name: "Другие отрасли", pct: 6 },
    ],
  },
  {
    id: 9,
    type: "significance",
    label: "Значение",
    number: "09",
    title: "Значение наградной политики",
    points: [
      {
        icon: "Star",
        title: "Мотивация труда",
        desc: "Стимулирует профессиональный рост и долгосрочную преданность делу у работников всех отраслей",
      },
      {
        icon: "Users",
        title: "Общественное признание",
        desc: "Формирует культуру уважения к труду и укрепляет авторитет профессиональных сообществ",
      },
      {
        icon: "TrendingUp",
        title: "Развитие региона",
        desc: "Выявляет и закрепляет лучшие практики, транслирует успешные модели поведения в обществе",
      },
      {
        icon: "Shield",
        title: "Государственная идентичность",
        desc: "Укрепляет связь граждан с регионом, формирует общую историю достижений Тамбовщины",
      },
    ],
  },
  {
    id: 10,
    type: "conclusion",
    label: "Заключение",
    number: "10",
    title: "Заключение",
    text: "Наградная политика Тамбовской области — это живая система государственного признания, основанная на справедливых критериях и прозрачных процедурах. Закон «О наградах и премиях» создаёт правовой фундамент для поощрения лучших граждан региона — тех, кто ежедневным трудом приумножает его достояние.",
    quote: "Награда — не итог, а веха. Признание вчерашнего труда и аванс доверия на завтра.",
    stats: [
      { value: "500+", label: "Награждений в год" },
      { value: "15+", label: "Видов наград" },
      { value: "60+", label: "Лет традиции" },
    ],
  },
  {
    id: 11,
    type: "sources",
    label: "Источники",
    number: "11",
    title: "Список источников",
  },
];

function SlideNumber({ n }: { n: string }) {
  return (
    <span className="font-display text-[hsl(40,15%,88%)] text-7xl font-light absolute top-10 right-16 select-none hidden md:block leading-none">
      {n}
    </span>
  );
}

function GoldLine() {
  return <div className="h-px w-12 bg-[hsl(38,65%,52%)] mb-8" />;
}

export default function Index() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = slideRefs.current.findIndex((r) => r === entry.target);
            if (idx !== -1) setActiveSlide(idx);
          }
        });
      },
      { threshold: 0.4 }
    );
    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (idx: number) => {
    slideRefs.current[idx]?.scrollIntoView({ behavior: "smooth" });
  };

  const colorDots = [
    "bg-[hsl(38,65%,52%)]",
    "bg-[hsl(220,15%,65%)]",
    "bg-[hsl(25,50%,55%)]",
  ];

  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="bg-[hsl(40,20%,97%)] relative">

      {/* Navigation dots */}
      <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col gap-2.5 hidden md:flex">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(i)}
            title={s.label}
            className="group flex items-center gap-2 justify-end"
          >
            <span className="text-xs text-[hsl(30,10%,45%)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {s.label}
            </span>
            <div
              className={`rounded-full transition-all duration-300 ${
                activeSlide === i
                  ? "w-2 h-6 bg-[hsl(38,65%,52%)]"
                  : "w-1.5 h-1.5 bg-[hsl(40,15%,82%)] hover:bg-[hsl(30,10%,45%)]"
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Slide 1: Cover */}
      <div
        ref={(el) => { slideRefs.current[0] = el; }}
        className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 py-16 border-b border-[hsl(40,15%,88%)] relative overflow-hidden"
        style={{ background: "hsl(30,15%,12%)" }}
      >
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(38,65%,52%)] text-xs tracking-[0.2em] uppercase mb-8">
          Тамбовская область
        </p>
        <h1
          style={{ fontFamily: "'Cormorant', serif", whiteSpace: "pre-line" }}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mb-8"
        >
          {slides[0].title}
        </h1>
        <div className="h-px w-12 bg-[hsl(38,65%,52%)] mb-8" />
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-white/60 text-lg font-light max-w-xl leading-relaxed">
          {slides[0].subtitle}
        </p>
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-white/30 text-sm mt-10">
          {slides[0].meta}
        </p>
        <div className="absolute bottom-0 right-0 w-[38vw] h-[38vw] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(38,65%,52%,0.06) 0%, transparent 70%)" }} />
      </div>

      {/* Slide 2: TOC */}
      <div
        ref={(el) => { slideRefs.current[1] = el; }}
        className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 py-16 border-b border-[hsl(40,15%,88%)] relative"
      >
        <SlideNumber n="02" />
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(38,65%,52%)] text-xs tracking-[0.2em] uppercase mb-4">Содержание</p>
        <GoldLine />
        <h2 style={{ fontFamily: "'Cormorant', serif" }} className="text-4xl md:text-5xl font-light text-[hsl(30,15%,12%)] mb-12">
          {slides[1].title}
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-3xl">
          {(slides[1] as any).items.map((item: string, i: number) => (
            <button
              key={i}
              onClick={() => scrollTo(i + 2)}
              className="flex items-center gap-4 py-3 border-b border-[hsl(40,15%,88%)] hover:border-[hsl(38,65%,52%)] transition-colors group text-left"
            >
              <span style={{ fontFamily: "'Cormorant', serif" }} className="text-[hsl(38,65%,52%)] text-sm font-light w-6 shrink-0">
                {String(i + 3).padStart(2, "0")}
              </span>
              <span style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(30,15%,12%)] text-sm group-hover:text-[hsl(38,65%,52%)] transition-colors">
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Slide 3: Legislation */}
      <div
        ref={(el) => { slideRefs.current[2] = el; }}
        className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 py-16 border-b border-[hsl(40,15%,88%)] relative"
        style={{ background: "hsl(40,20%,95%)" }}
      >
        <SlideNumber n="03" />
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(38,65%,52%)] text-xs tracking-[0.2em] uppercase mb-4">Законодательство</p>
        <GoldLine />
        <h2 style={{ fontFamily: "'Cormorant', serif" }} className="text-4xl md:text-5xl font-light text-[hsl(30,15%,12%)] mb-12">
          {slides[2].title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
          {(slides[2] as any).blocks.map((block: any, i: number) => (
            <div key={i} className="group">
              <div className="w-10 h-10 border border-[hsl(40,15%,88%)] flex items-center justify-center mb-4 group-hover:border-[hsl(38,65%,52%)] group-hover:bg-[hsl(42,70%,94%)] transition-all">
                <Icon name={block.icon} fallback="FileText" size={18} className="text-[hsl(30,15%,12%)]" />
              </div>
              <h3 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="font-medium text-[hsl(30,15%,12%)] mb-2">{block.heading}</h3>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(30,10%,45%)] text-sm leading-relaxed">{block.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 4: Award Types */}
      <div
        ref={(el) => { slideRefs.current[3] = el; }}
        className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 py-16 border-b border-[hsl(40,15%,88%)] relative"
      >
        <SlideNumber n="04" />
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(38,65%,52%)] text-xs tracking-[0.2em] uppercase mb-4">Классификация</p>
        <GoldLine />
        <h2 style={{ fontFamily: "'Cormorant', serif" }} className="text-4xl md:text-5xl font-light text-[hsl(30,15%,12%)] mb-12">
          {slides[3].title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          {(slides[3] as any).categories.map((cat: any, ci: number) => (
            <div key={ci} className="bg-white border border-[hsl(40,15%,88%)] p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className={`w-2 h-2 rounded-full ${colorDots[ci]}`} />
                <h3 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="font-medium text-[hsl(30,15%,12%)] text-sm tracking-wide uppercase">
                  {cat.name}
                </h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item: string, ii: number) => (
                  <li key={ii} className="flex items-start gap-2 text-sm text-[hsl(30,10%,45%)] leading-snug" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[hsl(40,15%,82%)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 5: Criteria */}
      <div
        ref={(el) => { slideRefs.current[4] = el; }}
        className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 py-16 border-b border-[hsl(40,15%,88%)] relative"
        style={{ background: "hsl(40,20%,95%)" }}
      >
        <SlideNumber n="05" />
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(38,65%,52%)] text-xs tracking-[0.2em] uppercase mb-4">Требования</p>
        <GoldLine />
        <h2 style={{ fontFamily: "'Cormorant', serif" }} className="text-4xl md:text-5xl font-light text-[hsl(30,15%,12%)] mb-12">
          {slides[4].title}
        </h2>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
          {(slides[4] as any).criteria.map((c: any, i: number) => (
            <div key={i} className="flex gap-5 p-5 border border-[hsl(40,15%,88%)] hover:border-[hsl(38,65%,52%)] transition-colors bg-white">
              <span style={{ fontFamily: "'Cormorant', serif" }} className="text-4xl font-light text-[hsl(42,70%,88%)] leading-none select-none">
                {c.num}
              </span>
              <div>
                <h3 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="font-medium text-[hsl(30,15%,12%)] mb-1">{c.title}</h3>
                <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(30,10%,45%)] text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 6: Procedure */}
      <div
        ref={(el) => { slideRefs.current[5] = el; }}
        className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 py-16 border-b border-[hsl(40,15%,88%)] relative"
      >
        <SlideNumber n="06" />
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(38,65%,52%)] text-xs tracking-[0.2em] uppercase mb-4">Порядок</p>
        <GoldLine />
        <h2 style={{ fontFamily: "'Cormorant', serif" }} className="text-4xl md:text-5xl font-light text-[hsl(30,15%,12%)] mb-12">
          {slides[5].title}
        </h2>
        <div className="flex flex-col md:flex-row gap-0 max-w-5xl">
          {(slides[5] as any).steps.map((s: any, i: number) => (
            <div key={i} className="flex-1 pr-6 pb-6 relative border-l border-[hsl(40,15%,88%)] pl-5 md:border-l-0 md:border-t md:pt-5 md:pl-0">
              <span style={{ fontFamily: "'Cormorant', serif" }} className="text-[hsl(38,65%,52%)] text-2xl font-light block mb-2">{s.step}</span>
              <h3 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="font-medium text-[hsl(30,15%,12%)] text-sm mb-1">{s.title}</h3>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(30,10%,45%)] text-xs leading-relaxed">{s.desc}</p>
              {i < 4 && (
                <div className="hidden md:flex absolute right-0 top-4">
                  <Icon name="ChevronRight" fallback="ArrowRight" size={14} className="text-[hsl(40,15%,82%)]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Slide 7: Examples */}
      <div
        ref={(el) => { slideRefs.current[6] = el; }}
        className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 py-16 border-b border-[hsl(40,15%,88%)] relative"
        style={{ background: "hsl(40,20%,95%)" }}
      >
        <SlideNumber n="07" />
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(38,65%,52%)] text-xs tracking-[0.2em] uppercase mb-4">Практика</p>
        <GoldLine />
        <h2 style={{ fontFamily: "'Cormorant', serif" }} className="text-4xl md:text-5xl font-light text-[hsl(30,15%,12%)] mb-12">
          {slides[6].title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl">
          {(slides[6] as any).examples.map((ex: any, i: number) => (
            <div
              key={i}
              className="group border border-[hsl(40,15%,88%)] p-5 bg-white transition-colors duration-300"
              style={{ transition: "background 0.3s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "hsl(30,15%,12%)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "white"; }}
            >
              <Icon name={ex.icon} fallback="Award" size={20} className="text-[hsl(38,65%,52%)] mb-4" />
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-xs tracking-widest uppercase text-[hsl(30,10%,45%)] mb-1 group-hover:text-white/50 transition-colors">
                {ex.sphere}
              </p>
              <h3 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="font-medium text-[hsl(30,15%,12%)] text-sm mb-2 group-hover:text-white transition-colors">
                {ex.award}
              </h3>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(30,10%,45%)] text-xs leading-relaxed group-hover:text-white/60 transition-colors">
                {ex.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 8: Statistics */}
      <div
        ref={(el) => { slideRefs.current[7] = el; }}
        className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 py-16 border-b border-[hsl(40,15%,88%)] relative"
      >
        <SlideNumber n="08" />
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(38,65%,52%)] text-xs tracking-[0.2em] uppercase mb-4">Данные</p>
        <GoldLine />
        <h2 style={{ fontFamily: "'Cormorant', serif" }} className="text-4xl md:text-5xl font-light text-[hsl(30,15%,12%)] mb-12">
          {slides[7].title}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <div>
            <h3 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-xs font-medium text-[hsl(30,15%,12%)] uppercase tracking-widest mb-6">
              Количество награждений по годам
            </h3>
            <div className="space-y-3">
              {(slides[7] as any).yearStats.map((y: any, i: number) => (
                <div key={i} className="flex items-center gap-4">
                  <span style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-sm text-[hsl(30,10%,45%)] w-10 shrink-0">{y.year}</span>
                  <div className="flex-1 h-5 bg-[hsl(40,15%,88%)] relative overflow-hidden">
                    <div
                      className="h-full"
                      style={{ width: `${y.width}%`, background: "hsl(38,65%,52%)" }}
                    />
                  </div>
                  <span style={{ fontFamily: "'Cormorant', serif" }} className="text-[hsl(30,15%,12%)] font-light w-10 text-right">{y.count}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-xs font-medium text-[hsl(30,15%,12%)] uppercase tracking-widest mb-6">
              Категории получателей
            </h3>
            <div className="space-y-3">
              {(slides[7] as any).categories.map((cat: any, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <span style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-xs text-[hsl(30,10%,45%)] flex-1 min-w-0">{cat.name}</span>
                  <div className="w-24 h-1.5 bg-[hsl(40,15%,88%)] relative">
                    <div
                      className="h-full"
                      style={{ width: `${cat.pct * 3.57}%`, background: "hsl(30,15%,12%)" }}
                    />
                  </div>
                  <span style={{ fontFamily: "'Cormorant', serif" }} className="text-[hsl(38,65%,52%)] text-sm font-light w-8 text-right">{cat.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide 9: Significance */}
      <div
        ref={(el) => { slideRefs.current[8] = el; }}
        className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 py-16 border-b border-[hsl(40,15%,88%)] relative"
        style={{ background: "hsl(40,20%,95%)" }}
      >
        <SlideNumber n="09" />
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(38,65%,52%)] text-xs tracking-[0.2em] uppercase mb-4">Ценность</p>
        <GoldLine />
        <h2 style={{ fontFamily: "'Cormorant', serif" }} className="text-4xl md:text-5xl font-light text-[hsl(30,15%,12%)] mb-12">
          {slides[8].title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {(slides[8] as any).points.map((p: any, i: number) => (
            <div key={i} className="flex gap-4 bg-white p-5 border border-[hsl(40,15%,88%)]">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center">
                <Icon name={p.icon} fallback="Star" size={20} className="text-[hsl(38,65%,52%)]" />
              </div>
              <div>
                <h3 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="font-medium text-[hsl(30,15%,12%)] mb-1">{p.title}</h3>
                <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(30,10%,45%)] text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 10: Conclusion */}
      <div
        ref={(el) => { slideRefs.current[9] = el; }}
        className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 py-16 relative"
        style={{ background: "hsl(30,15%,12%)" }}
      >
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(38,65%,52%)] text-xs tracking-[0.2em] uppercase mb-4">Итог</p>
        <div className="h-px w-12 mb-8" style={{ background: "hsl(38,65%,52%)" }} />
        <h2 style={{ fontFamily: "'Cormorant', serif" }} className="text-4xl md:text-6xl font-light text-white mb-8">
          {slides[9].title}
        </h2>
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-white/60 text-base leading-relaxed max-w-2xl mb-10">
          {(slides[9] as any).text}
        </p>
        <blockquote className="border-l-2 pl-5 mb-12" style={{ borderColor: "hsl(38,65%,52%)" }}>
          <p style={{ fontFamily: "'Cormorant', serif" }} className="text-xl italic text-white/70 leading-relaxed">
            "{(slides[9] as any).quote}"
          </p>
        </blockquote>
        <div className="flex gap-12">
          {(slides[9] as any).stats.map((s: any, i: number) => (
            <div key={i}>
              <p style={{ fontFamily: "'Cormorant', serif" }} className="text-4xl font-light" style={{ color: "hsl(38,65%,52%)" }}>
                {s.value}
              </p>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-white/40 text-xs mt-1 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 11: Sources */}
      <div
        ref={(el) => { slideRefs.current[10] = el; }}
        className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 py-16 border-t border-[hsl(40,15%,88%)] relative"
      >
        <SlideNumber n="11" />
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-[hsl(38,65%,52%)] text-xs tracking-[0.2em] uppercase mb-4">Библиография</p>
        <div className="h-px w-12 mb-8" style={{ background: "hsl(38,65%,52%)" }} />
        <h2 style={{ fontFamily: "'Cormorant', serif" }} className="text-4xl md:text-5xl font-light text-[hsl(30,15%,12%)] mb-12">
          Список источников
        </h2>
        <ol className="space-y-5 max-w-3xl">
          {[
            {
              num: "1",
              text: "Закон Тамбовской области «О наградах и премиях Тамбовской области» (с изменениями и дополнениями) // Официальный интернет-портал правовой информации Тамбовской области.",
            },
            {
              num: "2",
              text: "Конституция Российской Федерации (принята всенародным голосованием 12.12.1993, с изменениями, одобренными в ходе общероссийского голосования 01.07.2020).",
            },
            {
              num: "3",
              text: "Указ Президента Российской Федерации от 07.09.2010 № 1099 «О мерах по совершенствованию государственной наградной системы Российской Федерации».",
            },
            {
              num: "4",
              text: "Устав (Основной закон) Тамбовской области Российской Федерации // Официальный сайт Тамбовской областной Думы. — tambovoblduma.ru.",
            },
            {
              num: "5",
              text: "Официальный сайт Администрации Тамбовской области. Раздел «Государственные награды». — tambov.gov.ru.",
            },
            {
              num: "6",
              text: "Постановления Администрации Тамбовской области о награждении граждан (2019–2024 гг.) // Электронный фонд правовых документов «Гарант».",
            },
            {
              num: "7",
              text: "Доклад о состоянии государственного управления в Тамбовской области за 2023 год // Администрация Тамбовской области, 2024.",
            },
          ].map((src) => (
            <li key={src.num} className="flex gap-5 pb-5 border-b border-[hsl(40,15%,88%)] last:border-0 last:pb-0">
              <span style={{ fontFamily: "'Cormorant', serif" }} className="text-2xl font-light text-[hsl(38,65%,52%)] shrink-0 leading-tight w-5 text-right">
                {src.num}.
              </span>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="text-sm text-[hsl(30,10%,45%)] leading-relaxed">
                {src.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}