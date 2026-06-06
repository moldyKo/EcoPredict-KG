export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-bold text-slate-300">EcoPredict KG</span>
          <p className="text-xs mt-1 text-slate-600">© {new Date().getFullYear()} Интеллектуальная Экосистема Анализа Окружающей Среды.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-emerald-400 transition-colors">Документация</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Репозиторий GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Контакты</a>
        </div>
      </div>
    </footer>
  );
}

