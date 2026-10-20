import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ImageGallery from './components/ImageGallery';
import ColorSelector from './components/ColorSelector';
import SizeSelector from './components/SizeSelector';
import TechnicalSpecs from './components/TechnicalSpecs';
import CartDrawer from './components/CartDrawer';
import { ALL_SHOES } from './data/shoesData';
import { Search, Check } from 'lucide-react';

export default function App() {
  const [currentProduct, setCurrentProduct] = useState(ALL_SHOES[0]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // SOLUCIÓN AL ERROR: Uso de optional chaining (?.[0]) para evitar undefined
  const [activeVariant, setActiveVariant] = useState(ALL_SHOES[0]?.variants?.[0]);
  const [selectedSize, setSelectedSize] = useState(null);

  // Persistencia con LocalStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('salomon_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  useEffect(() => {
    localStorage.setItem('salomon_cart', JSON.stringify(cart));
  }, [cart]);

  const handleSelectProduct = (shoe) => {
    if (!shoe) return;
    setCurrentProduct(shoe);
    setActiveVariant(shoe.variants?.[0]);
    setSelectedSize(null);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor selecciona una talla antes de añadir a la bolsa.");
      return;
    }

    const newItem = {
      name: currentProduct.name,
      color: activeVariant?.colorName || 'Standard',
      size: selectedSize.eur,
      price: currentProduct.price,
      image: activeVariant?.thumbnail || ''
    };

    setCart([...cart, newItem]);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const filteredShoes = ALL_SHOES.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FBFBFB] flex flex-col font-sans">
      <Navbar cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />

      {/* Buscador / Filtro de Siluetas */}
      <div className="max-w-7xl mx-auto px-4 py-3 w-full flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-1/3">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Buscar silueta (Speedcross, ACS Pro, XT-6)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 bg-white border border-neutral-300 rounded text-xs font-mono"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto w-full sm:w-auto">
          {filteredShoes.length > 0 ? (
            filteredShoes.map(shoe => (
              <button
                key={shoe.id}
                onClick={() => handleSelectProduct(shoe)}
                className={`px-3 py-1 rounded text-[11px] font-mono border ${
                  currentProduct?.id === shoe.id ? 'bg-black text-white' : 'bg-white text-neutral-700'
                }`}
              >
                {shoe.name}
              </button>
            ))
          ) : (
            <span className="text-xs text-neutral-400 font-mono py-1">Sin resultados</span>
          )}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-4 flex-1 w-full">
        {currentProduct && activeVariant ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <section className="lg:col-span-7">
              <ImageGallery 
                images={activeVariant.images || []} 
                productName={currentProduct.name} 
              />
            </section>

            <section className="lg:col-span-5 space-y-6">
              <div>
                <span className="bg-black text-white text-[9px] font-mono px-2 py-0.5 rounded">
                  {currentProduct.badge}
                </span>
                <h1 className="text-2xl font-black uppercase font-mono mt-2">{currentProduct.name}</h1>
                <p className="text-xs text-neutral-600">{currentProduct.subtitle}</p>
              </div>

              <div className="text-2xl font-mono font-bold">
                {currentProduct.price ? currentProduct.price.toFixed(2) : '0.00'} €
              </div>

              <ColorSelector 
                variants={currentProduct.variants || []} 
                activeVariant={activeVariant} 
                onSelectVariant={setActiveVariant} 
              />
              
              <SizeSelector 
                sizes={currentProduct.sizes || []} 
                selectedSize={selectedSize} 
                onSelectSize={setSelectedSize} 
              />

              <button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded font-mono font-bold text-xs uppercase ${
                  addedAnimation ? 'bg-emerald-600 text-white' : 'bg-black text-white hover:bg-red-600'
                }`}
              >
                {addedAnimation ? <Check className="w-4 h-4 inline mr-1" /> : 'AÑADIR A LA BOLSA'}
              </button>

              <TechnicalSpecs 
                technologies={currentProduct.technologies || []} 
                specs={currentProduct.specs || {}} 
              />
            </section>
          </div>
        ) : (
          <div className="py-20 text-center font-mono text-neutral-500">
            No se encontró el producto. Prueba a buscar otra silueta.
          </div>
        )}
      </main>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart} 
        onRemoveItem={handleRemoveFromCart} 
      />
    </div>
  );
}