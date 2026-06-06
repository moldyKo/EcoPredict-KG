'use client';
import { motion } from 'framer-motion';

export default function Prediction() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full">
              Аналитика Нейросети
            </span>
            <h2 className="text-3xl font-bold md:text-4xl tracking-tight">
              Прогностический Анализ на 24 Часа
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Используя архитектуру рекуррентных нейронных сетей (LSTM), платформа EcoPredict обрабатывает непрерывные атмосферные потоки для точного математического расчета будущих экологических трендов.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-500 block">AQI на завтра</span>
                <span className="text-2xl font-bold text-emerald-400 mt-1 block">54</span>
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-500 block">Точность ИИ</span>
                <span className="text-2xl font-bold text-cyan-400 mt-1 block">94.2%</span>
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-500 block">Тренд</span>
                <span className="text-2xl font-bold text-teal-400 mt-1 block">Улучшение</span>
              </div>
            </div>
          </div>

          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 overflow-hidden h-80 flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="flex space-x-4 items-center z-10">
              {[40, 80, 60, 100, 140, 90, 120, 70].map((height, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [height - 15, height + 15, height - 15] }}
                  transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-3 bg-gradient-to-t from-emerald-500 to-cyan-400 rounded-full"
                  style={{ height }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
