import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavPriv = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-black text-white shadow-md border-b-4 border-black z-50"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center text-lg">
        {/* Logo */}
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Panel Administrativo
        </div>

        {/* Botón hamburguesa */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú de navegación */}
        <ul
          className={`lg:flex lg:space-x-6 lg:items-center font-medium transition-all duration-300 ease-in-out ${
            menuOpen
              ? "absolute top-20 left-0 w-full bg-black px-6 py-4 space-y-4 flex flex-col z-50"
              : "hidden lg:flex"
          }`}
        >
          <li><Link to="/models" className="nav-link">Models</Link></li>
          <li><Link to="/inicio" className="nav-link">Inicio</Link></li>
          <li><Link to="/productos" className="nav-link">Productos</Link></li>
          <li><Link to="/pedidos" className="nav-link">Pedidos</Link></li>
          <li><Link to="/clientes" className="nav-link">Clientes</Link></li>
          <li><Link to="/mensajes" className="nav-link">Mensajes</Link></li>
          <li><Link to="/provedores" className="nav-link">Proveedores</Link></li>
          <li><Link to="/mark" className="nav-link">Marcas</Link></li>

          {/* Botón de logout */}
          <li>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-300 transition duration-200"
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavPriv;
