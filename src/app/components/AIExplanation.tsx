'use client';

export default function AIExplanation() {
  const steps = [
    { num: '01', title: 'Сбор Данных', desc: 'Непрерывное объединение показаний датчиков, траектории ветра, барометрических показателей и метеоусловий.' },
    { num: '02', title: 'Обработка Признаков', desc: 'Извлечение сложных многомерных зависимостей из исторических архивов с использованием алгоритмов масштабирования.' },
    { num: '03', title: 'Нейросетевой Расчет', desc: 'Выполнение анализа через специализированные слои LSTM для выявления микроклиматических изменений на 24 часа вперед.' },
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Механика Машинного Обучения</h2>
          <p className="mt-4 text-slate-400">Узнайте больше о технологиях, лежащих в основе нашей экологической прогностической матрицы.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 relative group hover:border-slate-700 transition-colors">
              <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 absolute top-4 right-6 group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-500">{step.num}</span>
              <h3 className="text-xl font-semibold mt-4 mb-3 text-slate-200">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
