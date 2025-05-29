import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link para navegación sin recarga
import './login.css'; // Importa los estilos personalizados para la página de inicio de sesión

// Componente funcional para la página de inicio de sesión
const Login = () => {
  return (
    <div className="login-container">
      {/* Título principal */}
      <h2>Iniciar Sesión</h2>

      {/* Formulario de inicio de sesión */}
      <form>
        {/* Grupo de entrada para el correo electrónico */}
        <div className="input-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="" required />
        </div>

        {/* Grupo de entrada para la contraseña */}
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="" required />
        </div>

        {/* Botón para enviar el formulario */}
        <button type="submit" className="btn">Iniciar sesión</button>
      </form>

      {/* Opciones adicionales bajo el formulario */}
      <div className="login-options">
        {/* Enlace para recuperar contraseña */}
        <Link to="/recuperar">¿Olvidaste tu contraseña?</Link>

        {/* Enlace para registrarse si el usuario no tiene cuenta */}
        <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
      </div>
    </div>
  );
};

export default Login;

