'use client';
import { currentMetrics } from '../data/mockData';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const cards = [
    { title: 'PM2.5', value: `${currentMetrics.pm25} мкг/м³`, desc: 'Мелкодисперсные частицы', color: 'text-emerald-400' },
    { title: 'PM10', value: `${currentMetrics.pm10} мкг/м³`, desc: 'Крупные частицы пыли', color: 'text-cyan-400' },
    { title: 'NO2', value: `${currentMetrics.no2} ppb`, desc: 'Диоксид азота', color: 'text-blue-400' },
    { title: 'CO', value: `${currentMetrics.co} ppm`, desc: 'Угарный газ', color: 'text-emerald-400' },
    { title: 'Температура', value: `${currentMetrics.temperature}°C`, desc: 'Температура воздуха', color: 'text-amber-400' },
    { title: 'Влажность', value: `${currentMetrics.humidity}%`, desc: 'Относительная влажность', color: 'text-indigo-400' },
  ];

  return (
    <section id="dashboard" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Текущий Индекс Качества Воздуха (AQI)</h2>
          <p className="mt-4 text-slate-400">Прямая трансляция экологических данных, синхронизированная с наземными станциями.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-1 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl flex flex-col justify-between items-center text-center"
          >
            <span className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Статус Онлайн</span>
            <div className="my-8 relative">
              <div className="w-48 h-48 rounded-full border-4 border-emerald-500/30 flex flex-col items-center justify-center relative">
                <span className="text-6xl font-black text-emerald-400">{currentMetrics.aqi}</span>
                <span className="text-sm font-medium text-slate-400 mt-1">Умеренный AQI</span>
              </div>
            </div>
            <p className="text-sm text-slate-400">Качество воздуха приемлемое. Однако может присутствовать незначительный риск для чувствительных людей.</p>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md flex flex-col justify-between"
              >
                <span className="text-sm text-slate-400 font-medium">{card.title}</span>
                <span className={`text-2xl font-bold my-4 ${card.color}`}>{card.value}</span>
                <span className="text-xs text-slate-500">{card.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

   