import { ArrowLeft, MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../utils';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const whatsappNumber = "5493516304808"; // Reemplazar con el número real
  const whatsappMessage = encodeURIComponent(`Hola Alta Yerba!`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Botón Volver */}
        <button 
          onClick={onBack}
          className="flex items-center text-wood-dark hover:text-forest transition-colors mb-8 font-medium group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Volver a productos
        </button>

        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-wood/10 flex flex-col md:flex-row">
          
          {/* Imagen del Producto */}
          <div className="md:w-1/2 relative h-[400px] md:h-auto bg-cream-dark">
            <img 
              src={product.image} 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 bg-cream/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-forest uppercase tracking-wider shadow-sm">
              {product.category}
            </div>
          </div>

          {/* Detalles del Producto */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-dark mb-4">
              {product.name}
            </h1>
            
            <div className="text-3xl font-bold text-forest mb-6">
              {formatPrice(product.price)}
            </div>
            
            <div className="w-16 h-1 bg-wood/30 rounded-full mb-6"></div>
            
            <p className="text-lg text-wood-dark/80 leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Beneficios rápidos */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center text-wood-dark/70">
                <Truck className="w-5 h-5 mr-3 text-forest" />
                <span className="text-sm font-medium">Envío a todo el país</span>
              </div>
              <div className="flex items-center text-wood-dark/70">
                <ShieldCheck className="w-5 h-5 mr-3 text-forest" />
                <span className="text-sm font-medium">Compra segura</span>
              </div>
            </div>

            {/* Botón WhatsApp */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-md"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Consultar por WhatsApp
            </a>
            
            <p className="text-center text-sm text-wood-dark/50 mt-4">
              Te responderemos a la brevedad para coordinar el pago y envío.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
