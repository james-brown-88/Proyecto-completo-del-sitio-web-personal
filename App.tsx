
import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { View } from './types';
import Login from './components/Login';
import NewEntry from './components/NewEntry';
import EntriesList from './components/EntriesList';
import WeeklyReview from './components/WeeklyReview';

const App: React.FC = () => {
  const [view, setView] = useState<View>('login');
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) setView('new');
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        setView(prev => prev === 'login' ? 'new' : prev);
      } else {
        setView('login');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setView('login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-400">
        <p className="animate-pulse">Initializing Lab...</p>
      </div>
    );
  }

  if (!session && view !== 'login') {
    setView('login');
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 min-h-screen flex flex-col">
      {session && (
        <header className="mb-12 border-b border-gray-100 pb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold tracking-tight text-gray-900">AI-Lab</h1>
            <button 
              onClick={handleLogout}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest"
            >
              Logout
            </button>
          </div>
          <nav className="flex space-x-8">
            <button 
              onClick={() => setView('new')}
              className={`text-sm uppercase tracking-wider ${view === 'new' ? 'text-black border-b border-black' : 'text-gray-400 hover:text-black transition-colors'}`}
            >
              New Entry
            </button>
            <button 
              onClick={() => setView('entries')}
              className={`text-sm uppercase tracking-wider ${view === 'entries' ? 'text-black border-b border-black' : 'text-gray-400 hover:text-black transition-colors'}`}
            >
              Log
            </button>
            <button 
              onClick={() => setView('review')}
              className={`text-sm uppercase tracking-wider ${view === 'review' ? 'text-black border-b border-black' : 'text-gray-400 hover:text-black transition-colors'}`}
            >
              Review
            </button>
          </nav>
        </header>
      )}

      <main className="flex-grow">
        {view === 'login' && <Login />}
        {view === 'new' && <NewEntry onSaved={() => setView('entries')} />}
        {view === 'entries' && <EntriesList />}
        {view === 'review' && <WeeklyReview />}
      </main>

      <footer className="mt-20 py-8 border-t border-gray-100 text-[10px] text-gray-400 uppercase tracking-widest text-center">
        Cognitive Lab v1.0 — Silence is clarity.
      </footer>
    </div>
  );
};

export default App;
