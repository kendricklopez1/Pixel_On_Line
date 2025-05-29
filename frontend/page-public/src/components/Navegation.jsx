import React, { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";

const Navegation = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú móvil
  const [accountOpen, setAccountOpen] = useState(false); // Estado para controlar la visibilidad del submenú de cuenta

  // Efecto para cargar la fuente 'Poppins' desde Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <nav
      className="bg-black text-white shadow-md border-b-4 border-black hover:border-black z-50"
      style={{ fontFamily: "Poppins, sans-serif", position: "relative" }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center text-lg">
        {/* Logo */}
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Pixel On Line
        </div>

        {/* Botón hamburguesa (móvil) */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Barra de búsqueda (escritorio) */}
        <div className="hidden lg:block relative w-[30rem]">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>

        {/* Menú de navegación */}
        <ul
          className={`lg:flex lg:space-x-6 lg:items-center font-medium transition-all duration-300 ease-in-out ${
            menuOpen
              ? "absolute top-20 left-0 w-full bg-black px-6 py-4 space-y-4 flex flex-col z-50"
              : "hidden lg:flex"
          }`}
        >
          {/* Enlaces principales del menú */}
          <li>
            <a
              href="/"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-200"
            >
              Inicio
            </a>
          </li>

          {/* Submenú Cuenta */}
          <li className="relative z-50">
            <button
              onClick={() => setAccountOpen(!accountOpen)}
              className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-200"
            >
              Cuenta <ChevronDown className="ml-1 w-4 h-4 text-white" />
            </button>
            <div
              className={`absolute top-10 left-0 bg-gray-900 rounded shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
                accountOpen
                  ? "opacity-100 translate-y-0 z-50"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <ul className="text-sm py-2 px-4 space-y-1">
                <li>
                  <a
                    href="/login"
                    className="block text-white hover:text-blue-400 transition"
                  >
                    Iniciar Sesión
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    className="block text-white hover:text-blue-400 transition"
                  >
                    Registrarse
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Enlaces de navegación adicionales */}
          <li>
            <a
              href="/product"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-200"
            >
              Productos
            </a>
          </li>
          <li>
            <a
              href="/cart"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-200"
            >
              Carrito
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-200"
            >
              Contacto
            </a>
          </li>

          {/* Apartado Perfil */}
          <li>
            <a
              href="/profile"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-200"
            >
              Perfil
            </a>
          </li>

          {/* Barra de búsqueda móvil */}
          <li className="lg:hidden">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navegation;
