import { Truck, Leaf, ShieldCheck } from 'lucide-react';

export default function ValueSection() {
  const values = [
    {
      icon: <Truck className="w-10 h-10 text-forest" />,
      title: 'Envío a todo el país',
      description: 'Llevamos el sabor de Alta Yerba a la puerta de tu casa, estés donde estés.',
    },
    {
      icon: <Leaf className="w-10 h-10 text-forest" />,
      title: 'Cosecha Agroecológica',
      description: 'Cultivada sin agrotóxicos, respetando los ciclos naturales de la selva misionera.',
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-forest" />,
      title: 'Pago Seguro',
      description: 'Transacciones 100% protegidas con los principales medios de pago.',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-wood-dark">
            Por qué elegirnos
          </h2>
          <div className="w-24 h-1 bg-forest mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-cream rounded-2xl shadow-sm border border-wood/10 hover:shadow-md transition-shadow"
            >
              <div className="p-4 bg-cream-dark rounded-full mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-wood-dark mb-3">
                {value.title}
              </h3>
              <p className="text-wood-dark/80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
