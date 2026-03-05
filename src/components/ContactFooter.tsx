import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="contacto" className="bg-wood-dark text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Info de la marca */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-bold text-cream mb-6">Alta Yerba</h3>
            <p className="text-cream/80 leading-relaxed mb-6">
              Llevando la tradición y el mejor sabor del mate a cada rincón del mundo. Calidad premium desde la semilla hasta tu mate.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream/80 hover:text-forest transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-cream/80 hover:text-forest transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-cream/80 hover:text-forest transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Enlaces</h4>
            <ul className="space-y-3">
              <li><a href="#productos" className="text-cream/80 hover:text-forest transition-colors">Tienda</a></li>
              <li><a href="#nosotros" className="text-cream/80 hover:text-forest transition-colors">Nuestra Historia</a></li>
              <li><a href="#" className="text-cream/80 hover:text-forest transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="text-cream/80 hover:text-forest transition-colors">Políticas de Envío</a></li>
            </ul>
          </div>

          {/* Contacto Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-cream/80">
                <MapPin className="w-5 h-5 flex-shrink-0 text-forest mt-1" />
                <span>Ruta Nacional 14, Km 850<br />Misiones, Argentina</span>
              </li>
              <li className="flex items-center space-x-3 text-cream/80">
                <Phone className="w-5 h-5 flex-shrink-0 text-forest" />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3 text-cream/80">
                <Mail className="w-5 h-5 flex-shrink-0 text-forest" />
                <span>hola@yerbaalta.com</span>
              </li>
            </ul>
          </div>

          {/* Formulario simple */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Newsletter</h4>
            <p className="text-cream/80 mb-4">Suscríbete para recibir novedades y descuentos exclusivos.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-forest transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-forest hover:bg-forest-dark text-cream font-medium px-4 py-3 rounded-lg transition-colors"
              >
                Suscribirme
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-cream/60">
          <p>&copy; {new Date().getFullYear()} Alta Yerba. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-cream transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-cream transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
