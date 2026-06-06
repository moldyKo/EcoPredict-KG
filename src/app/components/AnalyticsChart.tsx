'use client';
import { generateChartData } from '../data/mockData';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = generateChartData();

export default function AnalyticsChart() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Синтез Временных Трендов</h2>
          <p className="text-slate-400 mt-2">Комплексный график сравнения прошлых верифицированных показателей с прогнозной ИИ-моделью.</p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/30 border border-slate-800/80 backdrop-blur-xl h-[450px]">
          <ResponsiveContainer width="100%" height="100%" minWidth={300}>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorHist" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPred" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} />
              <YAxis stroke="#64748b" fontSize={12} tickLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }}
                labelStyle={{ color: '#94a3b8' }}
              />
              <Area type="monotone" dataKey="historical" name="История (AQI)" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorHist)" />
              <Area type="monotone" dataKey="predicted" name="Прогноз ИИ (AQI)" stroke="#06b6d4" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorPred)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
