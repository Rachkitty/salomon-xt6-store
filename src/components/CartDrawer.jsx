import React from 'react';
import { X, Trash2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem }) {
  if (!isOpen) return null;
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-sm font-bold uppercase">Bolsa de Compras ({cartItems.length})</h2>
              <button onClick={onClose}><X className="w-5 h-5" /></button>
            </div>
            <div className="divide-y overflow-y-auto max-h-[60vh]">
              {cartItems.map((item, idx) => (
                <div key={idx} className="py-4 flex gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1 text-xs">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-neutral-500">Talla: EUR {item.size}</p>
                    <p className="font-bold mt-1">{item.price.toFixed(2)} €</p>
                  </div>
                  <button onClick={() => onRemoveItem(idx)} className="text-neutral-400 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between font-bold text-sm mb-4">
              <span>TOTAL</span>
              <span>{total.toFixed(2)} €</span>
            </div>
            <button onClick={() => alert("¡Checkout Simulado!")} className="w-full bg-black text-white py-3 rounded text-xs font-bold uppercase">
              Tramitar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}