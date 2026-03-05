import { ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-cream/90 backdrop-blur-md border-b border-wood/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-serif text-3xl font-bold text-forest">
              Alta Yerba
            </span>
          </div>

          {/* Navegación Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#productos" className="text-wood-dark hover:text-forest transition-colors font-medium">
              Productos
            </a>
            <a href="#nosotros" className="text-wood-dark hover:text-forest transition-colors font-medium">
              Nosotros
            </a>
            <a href="#contacto" className="text-wood-dark hover:text-forest transition-colors font-medium">
              Contacto
            </a>
          </div>

          {/* Botón Carrito */}
          <div className="flex items-center">
            <button
              onClick={onOpenCart}
              className="relative p-2 text-wood-dark hover:text-forest transition-colors"
              aria-label="Abrir carrito"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-cream bg-forest rounded-full transform translate-x-1/4 -translate-y-1/4">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
