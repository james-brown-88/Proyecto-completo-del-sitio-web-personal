
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { 
  LabEntry, 
  DAY_PARTS, 
  DAY_TYPES, 
  MENTAL_STATES, 
  INTENTIONS, 
  ALERTS, 
  ExecutionDelta 
} from '../types';

interface Props {
  onSaved: () => void;
}

const NewEntry: React.FC<Props> = ({ onSaved }) => {
  const [loading, setLoading] = useState(false);
  const [entry, setEntry] = useState<Partial<LabEntry>>({
    context: '',
    insight: '',
    value_score: 3,
    execution_delta: 'neutral',
    intention: [],
    mental_state: [],
    alerts: []
  });

  const toggleArrayItem = (key: keyof LabEntry, value: string) => {
    const current = (entry[key] as string[]) || [];
    if (current.includes(value)) {
      setEntry({ ...entry, [key]: current.filter(v => v !== value) });
    } else {
      setEntry({ ...entry, [key]: [...current, value] });
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!entry.context || !entry.insight) {
      alert("Core fields (Context & Insight) are mandatory.");
      return;
    }

    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      alert("Session expired.");
      return;
    }

    const { error } = await supabase.from('lab_entries').insert([{
      ...entry,
      user_id: user.id,
    }]);

    if (error) {
      console.error(error);
      alert("Error saving entry: " + error.message);
    } else {
      onSaved();
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8 animate-in fade-in duration-500">
      {/* Core Section */}
      <section className="space-y-6">
        <div>
          <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">Context</label>
          <textarea
            required
            placeholder="What were you trying to solve/explore?"
            className="w-full bg-white border border-gray-200 p-4 text-sm outline-none focus:border-black min-h-[100px] resize-none"
            value={entry.context}
            onChange={e => setEntry({ ...entry, context: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">Insight</label>
          <textarea
            required
            placeholder="What did you learn about your mind + AI interaction?"
            className="w-full bg-white border border-gray-200 p-4 text-sm outline-none focus:border-black min-h-[100px] resize-none"
            value={entry.insight}
            onChange={e => setEntry({ ...entry, insight: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">Value Score (1-5)</label>
            <input 
              type="range" min="1" max="5" step="1"
              className="w-full accent-black"
              value={entry.value_score}
              onChange={e => setEntry({ ...entry, value_score: parseInt(e.target.value) })}
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>TRIVIAL</span>
              <span>CRITICAL</span>
            </div>
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">Execution Delta</label>
            <div className="flex border border-gray-200">
              {(['farther', 'neutral', 'closer'] as ExecutionDelta[]).map(delta => (
                <button
                  key={delta}
                  type="button"
                  onClick={() => setEntry({ ...entry, execution_delta: delta })}
                  className={`flex-1 p-2 text-[10px] uppercase tracking-tighter transition-colors ${entry.execution_delta === delta ? 'bg-black text-white' : 'bg-white text-gray-400'}`}
                >
                  {delta}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Optional Details */}
      <details className="group border-t border-gray-100 pt-6">
        <summary className="list-none cursor-pointer text-[10px] uppercase tracking-widest text-gray-400 hover:text-black flex items-center">
          <span className="group-open:rotate-90 transition-transform mr-2">▶</span>
          Cognitive & Structural Metadata (Optional)
        </summary>
        
        <div className="mt-8 space-y-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
              <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">Part of Day</label>
              <select 
                className="w-full bg-white border border-gray-200 p-2 text-xs outline-none focus:border-black"
                value={entry.day_part || ''}
                onChange={e => setEntry({...entry, day_part: e.target.value})}
              >
                <option value="">Select...</option>
                {DAY_PARTS.map(dp => <option key={dp} value={dp}>{dp}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">Energy (1-5)</label>
              <input 
                type="number" min="1" max="5"
                className="w-full bg-white border border-gray-200 p-2 text-xs outline-none focus:border-black"
                value={entry.energy_score || ''}
                onChange={e => setEntry({...entry, energy_score: parseInt(e.target.value)})}
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">Why AI Now?</label>
            <input 
              type="text"
              placeholder="Curiosity, laziness, necessity...?"
              className="w-full bg-white border border-gray-200 p-3 text-sm outline-none focus:border-black"
              value={entry.why_ai_now || ''}
              onChange={e => setEntry({ ...entry, why_ai_now: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-3">Intentions</label>
            <div className="flex flex-wrap gap-2">
              {INTENTIONS.map(i => (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggleArrayItem('intention', i)}
                  className={`px-3 py-1.5 text-[10px] uppercase tracking-wider border transition-colors ${entry.intention?.includes(i) ? 'bg-black text-white border-black' : 'bg-transparent text-gray-400 border-gray-200 hover:border-gray-400'}`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">Prompt Key</label>
              <input 
                type="text"
                placeholder="Unique identifier for the prompt pattern"
                className="w-full bg-white border border-gray-200 p-3 text-sm outline-none focus:border-black mono"
                value={entry.prompt_key || ''}
                onChange={e => setEntry({ ...entry, prompt_key: e.target.value })}
              />
            </div>
             <div>
              <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">Role Assigned</label>
              <input 
                type="text"
                placeholder="Senior dev, Poet, Critic..."
                className="w-full bg-white border border-gray-200 p-3 text-sm outline-none focus:border-black"
                value={entry.role_assigned || ''}
                onChange={e => setEntry({ ...entry, role_assigned: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-3">Alerts</label>
            <div className="flex flex-wrap gap-2">
              {ALERTS.map(a => (
                <button
                  key={a}
                  type="button"
                  onClick={() => toggleArrayItem('alerts', a)}
                  className={`px-3 py-1.5 text-[10px] uppercase tracking-wider border transition-colors ${entry.alerts?.includes(a) ? 'bg-red-900 text-white border-red-900' : 'bg-transparent text-gray-400 border-gray-200 hover:border-red-200'}`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">Next Rule</label>
            <input 
              type="text"
              placeholder="What heuristic will you apply next time?"
              className="w-full bg-white border border-gray-200 p-3 text-sm outline-none focus:border-black"
              value={entry.next_rule || ''}
              onChange={e => setEntry({ ...entry, next_rule: e.target.value })}
            />
          </div>
        </div>
      </details>

      <div className="pt-6">
        <button 
          disabled={loading}
          className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
        >
          {loading ? 'Committing...' : 'Commit Entry to Lab'}
        </button>
      </div>
    </form>
  );
};

export default NewEntry;
