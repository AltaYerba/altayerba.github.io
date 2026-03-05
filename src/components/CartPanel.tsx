import { X, Trash2, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function CartPanel({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartPanelProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <>
      {/* Overlay oscuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Panel lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-cream shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header del carrito */}
        <div className="flex items-center justify-between p-6 border-b border-wood/20">
          <h2 className="text-2xl font-serif font-bold text-wood-dark">Tu Carrito</h2>
          <button
            onClick={onClose}
            className="p-2 text-wood-dark hover:text-forest transition-colors rounded-full hover:bg-wood/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Lista de items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-wood-dark/60">
              <p className="text-lg mb-4">Tu carrito está vacío</p>
              <button
                onClick={onClose}
                className="text-forest font-medium hover:underline"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 bg-white p-3 rounded-xl shadow-sm border border-wood/10">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-wood-dark text-sm leading-tight">
                        {item.product.name}
                      </h3>
                      <p className="text-forest font-semibold mt-1">
                        ${item.product.price.toFixed(2)}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-wood/20 rounded-lg overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="px-2 py-1 bg-cream-dark text-wood-dark hover:bg-wood/20 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 py-1 text-sm font-medium text-wood-dark min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="px-2 py-1 bg-cream-dark text-wood-dark hover:bg-wood/20 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer del carrito */}
        {items.length > 0 && (
          <div className="p-6 border-t border-wood/20 bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-wood-dark">Total</span>
              <span className="text-2xl font-bold text-forest">
                ${total.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-forest hover:bg-forest-dark text-cream font-bold py-4 rounded-xl transition-colors shadow-md">
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </>
  );
}
