import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const scrollToSection = useCallback((sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
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
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [location.pathname]);

  const services = [
    { name: "Digitalización Gastronómica", path: "/servicios/digitalizacion" },
    { name: "Automatización con IA", path: "/servicios/automatizacion" },
    { name: "Consultoría Operativa", path: "/servicios/consultoria" },
    { name: "Innovación y Tecnologías", path: "/servicios/innovacion" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="/logo_nexus-removebg-preview - copia.png"
              alt="Logo Nexus"
              className="h-16 w-auto"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Jaume
            </h1>
          </Link>
          
          {/* Menú de escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-blue-600 transition-colors ${location.pathname === '/' ? 'text-blue-600' : ''}`}>
              Inicio
            </Link>
            <div className="relative group">
              <button className={`flex items-center space-x-1 hover:text-blue-600 transition-colors ${location.pathname.includes('/servicios') ? 'text-blue-600' : ''}`}>
                <span>Servicios</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg py-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={`block px-4 py-2 hover:bg-blue-50 ${location.pathname === service.path ? 'text-blue-600 bg-blue-50' : ''}`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className={`hover:text-blue-600 transition-colors`}
            >
              Contacto
            </button>
          </div>

          {/* Botón del menú móvil */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Menú móvil */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2">
            <Link 
              to="/"
              className={`block py-2 hover:text-blue-600 transition-colors ${location.pathname === '/' ? 'text-blue-600' : ''}`}
            >
              Inicio
            </Link>
            <div className="space-y-2 pl-4">
              <div className="font-medium">Servicios</div>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className={`block py-2 hover:text-blue-600 transition-colors ${location.pathname === service.path ? 'text-blue-600' : ''}`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="block py-2 w-full text-left hover:text-blue-600 transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
