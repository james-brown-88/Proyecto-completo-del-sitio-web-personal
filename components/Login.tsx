
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-sm">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Access AI-Lab</h2>
          <p className="text-sm text-gray-500">Authorized personnel only.</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-1">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-gray-200 p-3 text-sm outline-none focus:border-black transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-1">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white border border-gray-200 p-3 text-sm outline-none focus:border-black transition-colors"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 text-xs p-3">
              {error}
            </div>
          )}

          <button 
            disabled={loading}
            className="w-full bg-black text-white text-xs uppercase tracking-widest p-4 hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
