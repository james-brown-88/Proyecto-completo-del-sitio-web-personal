
import React, { useState } from 'react';

const WEEKLY_TEMPLATE = `AI LAB — Informe semanal

1) Señales de alto valor:
   [Detalla usos donde la IA realmente amplificó tu capacidad]

2) Usos de bajo valor:
   [Identifica tareas donde la IA restó valor o causó pereza]

3) Patrones detectados:
   [Observa tendencias en tu forma de pedir ayuda o delegar]

4) Riesgos cognitivos:
   [Sesgos, dependencia o pérdida de criterio crítico]

5) Nueva regla:
   [Una instrucción innegociable para tu yo de la próxima semana]

6) Una cosa que dejo de hacer:
   [Elimina una fricción o mal hábito con la IA]`;

const WeeklyReview: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WEEKLY_TEMPLATE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Weekly Lab Review</h2>
        <p className="text-sm text-gray-500 max-w-md">
          Use this template to consolidate your learnings. This process is deliberate and manual to ensure maximum integration.
        </p>
      </div>

      <div className="relative group">
        <pre className="w-full bg-white border border-gray-200 p-8 text-xs leading-relaxed text-gray-800 mono whitespace-pre-wrap min-h-[400px]">
          {WEEKLY_TEMPLATE}
        </pre>
        <button 
          onClick={handleCopy}
          className="absolute top-4 right-4 bg-black text-white text-[10px] uppercase tracking-widest px-4 py-2 hover:bg-gray-800 transition-colors"
        >
          {copied ? 'Copied' : 'Copy to Clipboard'}
        </button>
      </div>

      <div className="mt-12 bg-gray-50 p-6 border border-gray-100">
        <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Protocol Note</h4>
        <p className="text-xs text-gray-600 italic">
          Future versions of AI-Lab will automate this report via n8n by analyzing your weekly log entries. For now, focus on the manual reflection.
        </p>
      </div>
    </div>
  );
};

export default WeeklyReview;
