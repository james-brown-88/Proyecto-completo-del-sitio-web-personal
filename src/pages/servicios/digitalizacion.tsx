import React from 'react';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';

const DigitalizacionGastronomica = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/#contacto');
    setTimeout(() => {
      const element = document.getElementById('contacto');
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      {/* Hero Section */}
      <section id="hero-digitalizacion" className="relative pt-32 pb-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Digitaliza tu cocina y gana control total</h1>
            <p className="text-xl mb-8">Menos papel, más precisión y gestión en tiempo real.</p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-colors">
              Solicitar asesoría gratuita
            </button>
          </div>
        </div>
      </section>

      {/* ¿Qué es? Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">¿Qué es y por qué lo necesitas?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            La digitalización gastronómica convierte los procesos de tu cocina en flujos digitales controlados desde un panel central. 
            Menús, escandallos, compras y stock se gestionan de forma unificada, reduciendo errores y mejorando la eficiencia.
          </p>
        </div>
      </section>

      {/* Casos de Uso Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Casos de uso</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Escandallos centralizados con costes actualizados</h3>
              <p className="text-gray-600">Mantén tus costes siempre al día y centralizados.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Carta conectada a stock y compras</h3>
              <p className="text-gray-600">Gestión integrada de tu oferta y recursos.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Hojas de producción/mise en place automáticas</h3>
              <p className="text-gray-600">Automatiza la preparación diaria.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Control de mermas y alertas de roturas</h3>
              <p className="text-gray-600">Anticípate a problemas de stock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué te entrego Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Qué te entrego</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Panel con recetas, costes y compras</h3>
              <p className="text-gray-600">Una herramienta completa para gestionar tu operativa.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Plantillas (CSV) y documentación de uso</h3>
              <p className="text-gray-600">Todo lo necesario para mantener el sistema funcionando.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">1 sesión de formación (60') + soporte 14 días</h3>
              <p className="text-gray-600">Acompañamiento para asegurar tu éxito.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Proceso</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="text-blue-600 text-xl font-bold mb-4">01</div>
              <h3 className="font-semibold mb-2">Auditoría rápida</h3>
              <p className="text-gray-600">30-45 minutos para entender tu negocio.</p>
            </div>
            <div className="relative">
              <div className="text-blue-600 text-xl font-bold mb-4">02</div>
              <h3 className="font-semibold mb-2">Carga inicial de recetas/insumos</h3>
              <p className="text-gray-600">Configuramos tu base de datos.</p>
            </div>
            <div className="relative">
              <div className="text-blue-600 text-xl font-bold mb-4">03</div>
              <h3 className="font-semibold mb-2">Configuración de panel y flujos</h3>
              <p className="text-gray-600">Personalizamos el sistema a tu medida.</p>
            </div>
            <div className="relative">
              <div className="text-blue-600 text-xl font-bold mb-4">04</div>
              <h3 className="font-semibold mb-2">Formación + soporte</h3>
              <p className="text-gray-600">Te acompañamos en la implementación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Listo para transformar tu negocio?</h2>
          <p className="text-xl mb-8">Agenda una consulta gratuita y descubre cómo podemos ayudarte.</p>
          <button 
            onClick={scrollToContact}
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-colors">
            Contactar ahora
          </button>
        </div>
      </section>
    </div>
  );
};

export default DigitalizacionGastronomica;
