'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToDashboard = () => {
    document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Верхняя панель навигации с логотипом */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-black tracking-wider text-white">
            ECO<span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">PREDICT</span>
            <span className="text-xs font-bold text-slate-500 ml-1">KG</span>
          </span>
        </div>
      </header>

      {/* Интерактивный анимированный фон */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-3 py-1 text-sm font-medium tracking-wider text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            Платформа ИИ и Климатических Технологий
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
        >
          Прогноз Качества <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Воздуха на Завтра
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
        >
          Система прогнозирования на базе искусственного интеллекта для мониторинга загрязнения атмосферы в режиме реального времени.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4"
        >
          <button
            onClick={scrollToDashboard}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-medium shadow-lg shadow-emerald-500/20 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Посмотреть Прогноз
          </button>
        </motion.div>
      </div>

      {/* ЭСТЕТИЧНЫЙ РАДАР ВМЕСТО ТРЕУГОЛЬНИКА */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center space-x-3 bg-slate-900/80 backdrop-blur-xl px-4 py-2.5 rounded-full border border-emerald-500/30 shadow-xl shadow-emerald-500/5 select-none hover:border-emerald-400/50 transition-all duration-300">
        <div className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
          <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-500/50 opacity-40 scale-150"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-md shadow-emerald-400"></span>
        </div>
        <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase drop-shadow-[0_0_6px_rgba(52,211,153,0.3)]">
          AI SYSTEM: ONLINE
        </span>
      </div>
    </section>
  );
}
