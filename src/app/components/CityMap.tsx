'use client';
import { useEffect, useState } from 'react';
import { mockStations } from '../data/mockData';

export default function CityMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Карта Региональных Станций Мониторинга</h2>
          <p className="text-slate-400 mt-2">Геопространственное расположение автоматизированных узлов телеметрии и зон экологического риска.</p>
        </div>

        <div className="h-[500px] w-100 rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden relative flex items-center justify-center">
          {mounted ? (
            <div className="absolute inset-0 bg-slate-900 flex flex-col p-8 justify-between">
              <div className="z-10 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-slate-800 max-w-sm">
                <h4 className="font-semibold text-emerald-400">Сеть Телеметрии г. Бишкек</h4>
                <p className="text-xs text-slate-400 mt-1">Интерактивный слой Leaflet. Мониторинг активных сенсоров экологии.</p>
              </div>
              
              <div className="space-y-3 z-10 max-w-md">
                {mockStations.map(station => (
                  <div key={station.id} className="p-3 bg-slate-950/90 rounded-lg border border-slate-800 flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium block text-slate-200">{station.name}</span>
                      <span className="text-xs text-slate-500">Широта: {station.lat}, Долгота: {station.lng}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs font-bold rounded ${
                      station.status === 'Good' ? 'bg-emerald-500/10 text-emerald-400' :
                      station.status === 'Moderate' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>AQI {station.aqi}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-slate-500 animate-pulse">Инициализация картографического движка...</div>
          )}
        </div>
      </div>
    </section>
  );
}
