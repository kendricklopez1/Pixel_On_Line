import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className="registro-page">
      <div className="registro-card">
        <h2>Regístrate</h2>
        {/* Formulario para el registro de un nuevo usuario */}
        <form className="form-grid">
          {/* Campo de entrada para el nombre completo */}
          <div className="input-group">
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text" // Tipo de entrada para texto
              id="name" // Identificador del campo
              placeholder="" // No tiene texto de sugerencia en este caso
              required // Asegura que este campo sea obligatorio
            />
          </div>
          
          {/* Campo de entrada para el correo electrónico */}
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email" 
              id="email" 
              placeholder="" 
              required 
            />
          </div>

          {/* Campo de entrada para el teléfono */}
          <div className="input-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel" 
              id="phone" 
              placeholder="" 
              required 
            />
          </div>

          {/* Campo de entrada para la dirección */}
          <div className="input-group">
            <label htmlFor="address">Dirección</label>
            <input
              type="text" 
              id="address" 
              placeholder="" 
              required 
            />
          </div>

          {/* Campo de entrada para la contraseña */}
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password" 
              placeholder="" 
              required 
            />
          </div>

          {/* Campo de entrada para confirmar la contraseña */}
          <div className="input-group">
            <label htmlFor="confirm-password">Repetir contraseña</label>
            <input
              type="password" 
              id="confirm-password" 
              placeholder="" 
              required 
            />
          </div>

          {/* Botón para enviar el formulario y crear la cuenta */}
          <div className="btn-container">
            <button type="submit" className="btn-register">Crear cuenta</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
