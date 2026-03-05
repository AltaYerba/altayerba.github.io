import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueSection from './components/ValueSection';
import ProductGrid from './components/ProductGrid';
import ContactFooter from './components/ContactFooter';
import ProductDetail from './components/ProductDetail';
import { productsData } from './data';
import { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Hacer scroll hacia arriba cuando se selecciona un producto
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [selectedProduct]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar onHome={() => setSelectedProduct(null)} />
      
      <main className="flex-grow">
        {selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onBack={() => setSelectedProduct(null)} 
          />
        ) : (
          <>
            <Hero />
            <ProductGrid 
              products={productsData} 
              onSelectProduct={setSelectedProduct} 
            />
            <ValueSection />
          </>
        )}
      </main>

      <ContactFooter />
    </div>
  );
}
