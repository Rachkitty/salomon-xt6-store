import React, { useState } from 'react';
import { Ruler } from 'lucide-react';

export default function SizeSelector({ sizes, selectedSize, onSelectSize }) {
  // Estado para Desafío 2 (Switch de Tallas EUR, US M, US W, CM)
  const [unit, setUnit] = useState('EUR');

  const getSizeLabel = (item) => {
    if (unit === 'US_M') return `${item.usM} US (M)`;
    if (unit === 'US_W') return `${item.usW} US (W)`;
    if (unit === 'CM') return `${item.cm} CM`;
    return `${item.eur} EUR`;
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center text-xs">
        <span className="font-bold uppercase tracking-wider text-neutral-500">Talla ({unit})</span>
        
        {/* Switch Interactivo (Desafío 2) */}
        <div className="flex gap-1 bg-neutral-100 p-0.5 rounded text-[10px] font-mono">
          {['EUR', 'US_M', 'US_W', 'CM'].map((sys) => (
            <button
              key={sys}
              type="button"
              onClick={() => setUnit(sys)}
              className={`px-2 py-0.5 rounded ${unit === sys ? 'bg-black text-white' : 'text-neutral-600'}`}
            >
              {sys}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {sizes.map((item) => {
          const isOutOfStock = item.stock === 0;
          const label = getSizeLabel(item);
          const isSelected = selectedSize?.eur === item.eur;

          return (
            <button
              key={item.eur}
              disabled={isOutOfStock}
              onClick={() => onSelectSize(item)}
              className={`py-2 px-1 text-xs font-mono rounded transition border ${
                isOutOfStock
                  ? 'bg-neutral-100 text-neutral-300 line-through cursor-not-allowed'
                  : isSelected
                  ? 'bg-neutral-900 text-white font-bold'
                  : 'bg-white border-neutral-300 text-neutral-800 hover:border-black'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}