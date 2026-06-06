'use client';

export default function About() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Интеграция в Экосистему Smart City</h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
          Проект EcoPredict KG разработан для снижения негативного воздействия загрязненного воздуха на городское население. Предоставляя API-инфраструктуру данных, мы позволяем административным органам развертывать превентивные оповещения и оптимизировать транспортные потоки до возникновения смога.
        </p>
        <div className="inline-flex gap-8 justify-center text-left pt-6">
          <div>
            <h4 className="text-xl font-bold text-white">Миссия</h4>
            <p className="text-sm text-slate-400 mt-1 max-w-xs">Демократизация экологических данных для безопасности граждан.</p>
          </div>
          <div className="w-[1px] bg-slate-800" />
          <div>
            <h4 className="text-xl font-bold text-white">Эффект</h4>
            <p className="text-sm text-slate-400 mt-1 max-w-xs">Снижение пиковых рисков воздействия вредных веществ на здоровье населения до 30%.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
