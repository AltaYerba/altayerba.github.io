import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="contacto" className="bg-wood-dark text-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
          
          {/* Info de la marca */}
          <div className="max-w-md">
            <h3 className="font-serif text-3xl font-bold text-cream mb-6">Alta Yerba</h3>
            <p className="text-cream/80 leading-relaxed mb-6">
              Llevando la tradición y el mejor sabor del mate a cada rincón del mundo. Calidad premium desde la semilla hasta tu mate.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/yerbaalta.cba/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cream/80 hover:text-forest transition-colors"
              >
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

          {/* Contacto Info */}
          <div className="md:text-left">
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-cream/80">
                <MapPin className="w-5 h-5 flex-shrink-0 text-forest mt-1" />
                <span>Alta Córdoba<br />Córdoba, Argentina</span>
              </li>
              <li className="flex items-center space-x-3 text-cream/80">
                <Phone className="w-5 h-5 flex-shrink-0 text-forest" />
                <span>+54 3516 30-4808</span>
              </li>
              <li className="flex items-center space-x-3 text-cream/80">
                <Mail className="w-5 h-5 flex-shrink-0 text-forest" />
                <span>hola@yerbaalta.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-cream/10 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-cream/60">
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
