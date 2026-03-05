export default function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-[80vh] w-full pt-20">
      {/* Imagen de fondo con overlay */}
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1590412200986-215617d64513?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute w-full h-full bg-forest-muted/70 mix-blend-multiply"></div>
        <div className="absolute w-full h-full bg-black/20"></div>
      </div>

      {/* Contenido del Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl mx-auto">
        <h1 className="text-cream font-serif font-bold text-5xl md:text-7xl drop-shadow-lg mb-6 w-full">
          El verdadero sabor<br />del mate
        </h1>
        <p className="text-lg md:text-xl text-cream/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-md w-full">
          Descubre nuestra selección premium de yerba mate. Cosechada con respeto por la tierra y secada con métodos tradicionales para ofrecerte una experiencia única en cada mate.
        </p>
        <a
          href="#productos"
          className="inline-block bg-forest hover:bg-forest-dark text-cream font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Comprar Ahora
        </a>
      </div>
    </div>
  );
}
