import React from 'react';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';

const AutomatizacionIA = () => {
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
      <section id="hero-automatizacion" className="relative pt-32 pb-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Automatización inteligente para tu negocio</h1>
            <p className="text-xl mb-8">Simplifica tareas repetitivas y libera tiempo para lo importante.</p>
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
            La automatización con IA permite que tu negocio funcione de manera más eficiente, automatizando tareas repetitivas
            y proporcionando información valiosa de manera automática. Desde gestión de inventario hasta atención al cliente,
            la IA puede ayudarte a ahorrar tiempo y reducir errores.
          </p>
        </div>
      </section>

      {/* Casos de Uso Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Casos de uso</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Generación de listas de compra semanales</h3>
              <p className="text-gray-600">Automatiza la planificación de tus compras basada en datos históricos.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Respuestas a reservas/consultas recurrentes</h3>
              <p className="text-gray-600">Atención al cliente automatizada para consultas frecuentes.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Recordatorios de producción y checklists</h3>
              <p className="text-gray-600">Sistema automático de recordatorios y verificaciones.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Informe diario con ventas, mermas y tareas</h3>
              <p className="text-gray-600">Reportes automáticos para toma de decisiones.</p>
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
              <h3 className="font-semibold mb-2">Flujos n8n listos (y editables)</h3>
              <p className="text-gray-600">Automatizaciones personalizadas y adaptables a tus necesidades.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Conectores básicos (email/drive/sheets)</h3>
              <p className="text-gray-600">Integración con las herramientas que ya utilizas.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Manual rápido y vídeo corto (loom)</h3>
              <p className="text-gray-600">Documentación clara para mantener todo funcionando.</p>
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
              <h3 className="font-semibold mb-2">Detección de tareas repetitivas</h3>
              <p className="text-gray-600">Identificamos oportunidades de automatización.</p>
            </div>
            <div className="relative">
              <div className="text-blue-600 text-xl font-bold mb-4">02</div>
              <h3 className="font-semibold mb-2">Prototipo del flujo</h3>
              <p className="text-gray-600">Diseñamos la solución automatizada.</p>
            </div>
            <div className="relative">
              <div className="text-blue-600 text-xl font-bold mb-4">03</div>
              <h3 className="font-semibold mb-2">Integración y pruebas</h3>
              <p className="text-gray-600">Implementamos y verificamos el funcionamiento.</p>
            </div>
            <div className="relative">
              <div className="text-blue-600 text-xl font-bold mb-4">04</div>
              <h3 className="font-semibold mb-2">Ajustes + checklist</h3>
              <p className="text-gray-600">Optimizamos y documentamos el mantenimiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Listo para automatizar tu negocio?</h2>
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

export default AutomatizacionIA;
