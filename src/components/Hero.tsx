export default function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full pt-20">
      {/* Imagen de fondo con overlay */}
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://i.imgur.com/Nj2CgZJ.jpeg')",
        }}
      >
        <div className="absolute w-full h-full bg-forest-muted/70 mix-blend-multiply"></div>
        <div className="absolute w-full h-full bg-black/20"></div>
      </div>

      {/* Contenido del Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-6xl mx-auto">
        <h1 className="text-cream font-serif font-bold text-4xl sm:text-5xl md:text-6xl drop-shadow-lg mb-6 w-full leading-tight md:whitespace-nowrap">
          El verdadero sabor del mate
        </h1>
        <p className="text-lg md:text-xl text-cream/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-md w-full">
          Yerba mate seleccionada con envío a domicilio en toda la zona. De Alta Córdoba directo a tu termo.
        </p>
        <a
          href="#productos"
          className="inline-block bg-forest hover:bg-forest-dark text-cream font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Ver Productos
        </a>
      </div>
    </div>
  );
}
