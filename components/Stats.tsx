import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { METRICS } from '../constants';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const Stats: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  // Transform metrics for chart
  const data = METRICS.map(m => ({
    name: m.label.split(" ")[0], // Short name for axis
    fullLabel: m.label,
    value: m.value,
    suffix: m.suffix,
    fullDesc: m.description
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      return (
        <div className="glass-panel p-4 rounded-lg shadow-xl border border-slate-700">
          <p className="font-bold text-slate-200">{dataPoint.fullLabel}</p>
          <p className="text-cyan-400 text-xl font-mono my-1">
            {dataPoint.value}{dataPoint.suffix}
          </p>
          <p className="text-xs text-slate-400 max-w-[150px]">{dataPoint.fullDesc}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-12 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Side */}
          <div ref={ref} className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl font-bold text-white">Impact by the Numbers</h2>
            <p className="text-slate-400">
              My career has been defined by measurable ROI. Whether it's scaling transaction volume, securing millions of accounts, or optimizing operational efficiency through AI, I deliver results that matter.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
               {METRICS.map((metric, idx) => (
                 <div key={idx} className="p-4 rounded-lg bg-slate-800/40 border border-slate-700/50">
                    <div className="text-3xl font-bold text-white font-mono">
                      {metric.value}<span className="text-cyan-500 text-xl">{metric.suffix}</span>
                    </div>
                    <div className="text-sm text-slate-400 mt-1">{metric.label}</div>
                 </div>
               ))}
            </div>
          </div>

          {/* Chart Side */}
          <div className="h-[300px] w-full glass-panel rounded-xl p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <XAxis 
                  dataKey="name" 
                  stroke="#64748b" 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#06b6d4' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;