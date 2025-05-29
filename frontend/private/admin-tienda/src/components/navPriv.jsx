import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../pages/Styles.css/Nav.css"; 

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
    <nav>
      <div className="container">
        {/* Logo */}
        <div className="logo">Panel Administrativo</div>

        {/* Botón hamburguesa */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú de navegación */}
        <ul className={menuOpen ? "open" : ""}>
          <li><Link to="/models" onClick={() => setMenuOpen(false)}>Models</Link></li>
          <li><Link to="/inicio" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/productos" onClick={() => setMenuOpen(false)}>Productos</Link></li>
          <li><Link to="/pedidos" onClick={() => setMenuOpen(false)}>Pedidos</Link></li>
          <li><Link to="/clientes" onClick={() => setMenuOpen(false)}>Clientes</Link></li>
          <li><Link to="/mensajes" onClick={() => setMenuOpen(false)}>Mensajes</Link></li>
          <li><Link to="/provedores" onClick={() => setMenuOpen(false)}>Proveedores</Link></li>
          <li><Link to="/mark" onClick={() => setMenuOpen(false)}>Marcas</Link></li>

          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavPriv;
