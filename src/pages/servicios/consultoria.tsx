import React from 'react';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';

const ConsultoriaOperativa = () => {
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
      <section id="hero-consultoria" className="relative pt-32 pb-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Consultoría operativa para hostelería</h1>
            <p className="text-xl mb-8">Optimiza tus procesos y mejora la eficiencia de tu negocio.</p>
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
            La consultoría operativa se centra en optimizar los procesos clave de tu negocio hostelero. 
            Analizamos tu operativa actual, identificamos cuellos de botella y diseñamos soluciones 
            prácticas que mejoran la eficiencia y la rentabilidad.
          </p>
        </div>
      </section>

      {/* Casos de Uso Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Casos de uso</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Rediseño de mise en place y secuencias de servicio</h3>
              <p className="text-gray-600">Optimiza la preparación y el servicio para máxima eficiencia.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Estandarización de fichas técnicas y porciones</h3>
              <p className="text-gray-600">Asegura la consistencia en calidad y costes.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Mejora del flujo de compras y recepción</h3>
              <p className="text-gray-600">Optimiza la gestión de proveedores y mercancía.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Calendario de producción sin cuellos de botella</h3>
              <p className="text-gray-600">Planifica de manera eficiente la producción diaria.</p>
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
              <h3 className="font-semibold mb-2">Informe de hallazgos + plan de acción (1–3 semanas)</h3>
              <p className="text-gray-600">Análisis detallado y pasos concretos a seguir.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Fichas y plantillas listas para imprimir</h3>
              <p className="text-gray-600">Herramientas prácticas para implementación inmediata.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Roadmap con prioridades y métricas</h3>
              <p className="text-gray-600">Guía clara para el seguimiento y medición de resultados.</p>
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
              <h3 className="font-semibold mb-2">Visita/llamada de diagnóstico</h3>
              <p className="text-gray-600">Evaluación inicial de necesidades.</p>
            </div>
            <div className="relative">
              <div className="text-blue-600 text-xl font-bold mb-4">02</div>
              <h3 className="font-semibold mb-2">Mapeo de procesos y problemas</h3>
              <p className="text-gray-600">Identificación de áreas de mejora.</p>
            </div>
            <div className="relative">
              <div className="text-blue-600 text-xl font-bold mb-4">03</div>
              <h3 className="font-semibold mb-2">Plan de acción priorizado</h3>
              <p className="text-gray-600">Desarrollo de soluciones específicas.</p>
            </div>
            <div className="relative">
              <div className="text-blue-600 text-xl font-bold mb-4">04</div>
              <h3 className="font-semibold mb-2">Acompañamiento en la implantación</h3>
              <p className="text-gray-600">Soporte durante la implementación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Listo para optimizar tus operaciones?</h2>
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

export default ConsultoriaOperativa;
