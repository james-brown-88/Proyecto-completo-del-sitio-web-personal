import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="/logo_nexus-removebg-preview - copia.png"
                alt="Logo Nexus"
                className="h-16 w-auto"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Jaume
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#sobre-mi" className="hover:text-blue-600 transition-colors">Sobre mí</a>
              <a href="#servicios" className="hover:text-blue-600 transition-colors">Servicios</a>
              <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/ChatGPT Image 11 ago 2025, 13_28_03.png"
              alt="Bar restaurante con iluminación cálida"
              className="w-full h-full object-cover filter brightness-105 contrast-110 saturate-110 shadow-2xl transform-gpu [image-rendering:-webkit-optimize-contrast] [backface-visibility:hidden]"
            />
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 mt-32">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">Chef & Consultor Digital</h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] font-semibold">Fusionando la gastronomía con la tecnología</p>
            <a href="#sobre-mi" className="inline-block bg-blue-600/90 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-xl hover:shadow-2xl">
              Descubre más
            </a> 
          </div>
        </section>

        {/* Sobre mí Section */}
        <section id="sobre-mi" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">Sobre mí</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  Soy Jaume, chef profesional con una pasión por la tecnología y la
                  inteligencia artificial aplicada a la hostelería. Combino mi
                  experiencia gastronómica con herramientas modernas para optimizar
                  procesos y mejorar la experiencia del cliente.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                    <div className="text-sm text-gray-600">Años de experiencia</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">20-30%</div>
                    <div className="text-sm text-gray-600">Ahorro de tiempo operativo</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl">
                  <h3 className="font-semibold mb-2">Gastronomía</h3>
                  <p className="text-sm text-gray-600">Experiencia en cocina de alto nivel</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl">
                  <h3 className="font-semibold mb-2">Desarrollo</h3>
                  <p className="text-sm text-gray-600">Experto en tecnologías web modernas</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl">
                  <h3 className="font-semibold mb-2">IA</h3>
                  <p className="text-sm text-gray-600">Integración de soluciones inteligentes</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl">
                  <h3 className="font-semibold mb-2">Innovación</h3>
                  <p className="text-sm text-gray-600">Mejora continua de procesos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section id="servicios" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">Nuestros Servicios</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Digitalización Gastronómica</h3>
                  <p className="text-gray-600 mb-6">Convierte tu cocina en un entorno inteligente con herramientas que facilitan la gestión de menús, escandallos y pedidos en un solo panel.</p>
                  <Link to="/servicios/digitalizacion" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors" onClick={() => window.scrollTo(0, 0)}>
                    Saber más →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Automatización con IA</h3>
                  <p className="text-gray-600 mb-6">Ahorra tiempo y dinero integrando asistentes inteligentes que aprenden de tu negocio y optimizan tareas repetitivas.</p>
                  <Link to="/servicios/automatizacion" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors" onClick={() => window.scrollTo(0, 0)}>
                    Saber más →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Consultoría Operativa</h3>
                  <p className="text-gray-600 mb-6">Analizamos tus procesos y te ayudamos a optimizar costes, mejorar la velocidad de servicio y aumentar la satisfacción del cliente.</p>
                  <Link to="/servicios/consultoria" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors" onClick={() => window.scrollTo(0, 0)}>
                    Saber más →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Innovación y Nuevas Tecnologías</h3>
                  <p className="text-gray-600 mb-6">Explora soluciones únicas como asistentes por voz, sensores y analítica avanzada para mantener tu negocio siempre un paso adelante.</p>
                  <Link to="/servicios/innovacion" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors" onClick={() => window.scrollTo(0, 0)}>
                    Saber más →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto Section */}
        <section id="contacto" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">Contacto</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">¡Hablemos!</h3>
                <p className="text-gray-600 mb-8">
                  ¿Tienes un proyecto en mente? ¿Quieres saber más sobre mis servicios?
                  No dudes en contactarme.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/jaime-garc%C3%ADa-padial-44a0b9a5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="mailto:jaimegarcia@nexuschef.com"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    jaimegarcia@nexuschef.com
                  </a>
                </div>
              </div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Jaume</h3>
              <p className="text-gray-400">
                Fusionando la gastronomía con la tecnología para crear experiencias únicas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#sobre-mi" className="text-gray-400 hover:text-white transition-colors">Sobre mí</a></li>
                <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Sígueme</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/jaime-garc%C3%ADa-padial-44a0b9a5/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:jaimegarcia@nexuschef.com" 
                   className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Jaume - Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
