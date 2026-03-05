import { Menu } from 'lucide-react';

interface NavbarProps {
  onHome: () => void;
}

export default function Navbar({ onHome }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-cream/90 backdrop-blur-md border-b border-wood/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer w-auto md:w-1/4" onClick={onHome}>
            <span className="font-serif text-2xl md:text-3xl font-bold text-forest whitespace-nowrap">
              Alta Yerba
            </span>
          </div>

          {/* Navegación Desktop - Centrada con Flex */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            <a href="#productos" onClick={onHome} className="text-wood-dark hover:text-forest transition-colors font-medium">
              Productos
            </a>
            <a href="#nosotros" onClick={onHome} className="text-wood-dark hover:text-forest transition-colors font-medium">
              Nosotros
            </a>
            <a href="#contacto" className="text-wood-dark hover:text-forest transition-colors font-medium">
              Contacto
            </a>
          </div>

          {/* Espaciador derecho para balancear el flex */}
          <div className="hidden md:flex w-1/4 justify-end"></div>

          {/* Menú móvil */}
          <div className="md:hidden flex items-center">
            <button className="text-wood-dark hover:text-forest p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
