import { useState } from 'react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Con Palo', 'Sin Palo', 'Barbacuá', 'Saborizadas'];

  const filteredProducts = filter === 'Todos'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <section id="productos" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-wood-dark">
            Nuestras Yerbas
          </h2>
          <div className="w-24 h-1 bg-forest mx-auto mt-4 rounded-full mb-8"></div>
          
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                  filter === cat
                    ? 'bg-forest text-cream border-forest'
                    : 'bg-transparent text-wood-dark border-wood/30 hover:border-forest hover:text-forest'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-wood/10 hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-cream-dark">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-forest uppercase tracking-wider">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-wood-dark mb-2">
                  {product.name}
                </h3>
                <p className="text-wood-dark/70 text-sm mb-4 flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-forest">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-wood hover:bg-wood/90 text-cream px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
