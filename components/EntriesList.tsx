
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { LabEntry } from '../types';

const EntriesList: React.FC = () => {
  const [entries, setEntries] = useState<LabEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterHighValue, setFilterHighValue] = useState(false);
  const [filterAlerts, setFilterAlerts] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('lab_entries')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setEntries(data);
    }
    setLoading(false);
  };

  const filteredEntries = entries.filter(e => {
    if (filterHighValue && e.value_score < 4) return false;
    if (filterAlerts && (!e.alerts || e.alerts.length === 0)) return false;
    return true;
  });

  if (loading) return <p className="text-gray-400 animate-pulse text-xs text-center py-20 uppercase tracking-widest">Accessing Logs...</p>;

  return (
    <div className="animate-in slide-in-from-bottom-2 duration-700">
      <div className="flex flex-wrap gap-4 mb-8">
        <button 
          onClick={() => setFilterHighValue(!filterHighValue)}
          className={`text-[10px] uppercase tracking-widest border px-3 py-1 transition-colors ${filterHighValue ? 'bg-black text-white' : 'text-gray-400 border-gray-200'}`}
        >
          High Value (≥ 4)
        </button>
        <button 
          onClick={() => setFilterAlerts(!filterAlerts)}
          className={`text-[10px] uppercase tracking-widest border px-3 py-1 transition-colors ${filterAlerts ? 'bg-red-900 text-white border-red-900' : 'text-gray-400 border-gray-200'}`}
        >
          Has Alerts
        </button>
      </div>

      <div className="space-y-12">
        {filteredEntries.length === 0 ? (
          <p className="text-center py-20 text-gray-300 italic text-sm">No entries matched the criteria.</p>
        ) : (
          filteredEntries.map(entry => (
            <article key={entry.id} className="group border-l border-gray-100 pl-6 relative">
              <div className="absolute w-2 h-2 bg-gray-200 rounded-full -left-[4.5px] top-1 group-hover:bg-black transition-colors" />
              
              <header className="flex flex-wrap items-baseline gap-4 mb-3">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mono">
                  {new Date(entry.created_at!).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                </span>
                <span className={`text-[10px] uppercase tracking-widest font-semibold ${entry.value_score >= 4 ? 'text-black' : 'text-gray-300'}`}>
                  VAL: {entry.value_score}/5
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                  Δ: {entry.execution_delta}
                </span>
                {entry.alerts && entry.alerts.length > 0 && (
                  <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">
                    ALERTS: {entry.alerts.length}
                  </span>
                )}
              </header>

              <div className="space-y-4">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Context</h4>
                  <p className="text-sm leading-relaxed text-gray-800">{entry.context}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Insight</h4>
                  <p className="text-sm leading-relaxed text-black font-medium">{entry.insight}</p>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default EntriesList;
