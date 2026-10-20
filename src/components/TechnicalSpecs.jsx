import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function TechnicalSpecs({ technologies, specs }) {
  const [openTab, setOpenTab] = useState('tech');

  return (
    <div className="border-t border-neutral-200 pt-6 mt-8 space-y-4">
      <div className="grid grid-cols-3 gap-3 bg-neutral-100 p-3 rounded text-center font-mono text-xs">
        <div>
          <span className="block text-[10px] text-neutral-500">PESO</span>
          <span className="font-bold">{specs.weight}</span>
        </div>
        <div className="border-x border-neutral-300">
          <span className="block text-[10px] text-neutral-500">DROP</span>
          <span className="font-bold">{specs.drop}</span>
        </div>
        <div>
          <span className="block text-[10px] text-neutral-500">TERRENO</span>
          <span className="font-bold">{specs.cushioning}</span>
        </div>
      </div>

      <div className="py-2">
        <button onClick={() => setOpenTab(openTab === 'tech' ? null : 'tech')} className="w-full flex justify-between font-bold text-xs uppercase">
          <span>Tecnologías de Alto Rendimiento</span>
          <ChevronDown className={`w-4 h-4 transition ${openTab === 'tech' ? 'rotate-180' : ''}`} />
        </button>
        {openTab === 'tech' && (
          <div className="mt-3 space-y-2 text-xs text-neutral-600">
            {technologies.map((t, i) => (
              <div key={i}>
                <span className="font-bold text-black">• {t.title}: </span>
                <span>{t.desc}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}