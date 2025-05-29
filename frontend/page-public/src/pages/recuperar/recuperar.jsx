import React from 'react';
import './recuperar.css';

const Recuperar = () => {
  return (
    <div className="recuperar-container">
      <h2>Recuperar Contraseña</h2>
      {/* Formulario para recuperar la contraseña */}
      <form>
        {/* Campo de entrada para el correo electrónico */}
        <div className="input-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email" // Tipo de entrada para correo electrónico
            id="email" // Identificador del campo
            placeholder="Introduce tu correo" // Texto de sugerencia dentro del campo
            required // Asegura que este campo sea obligatorio
          />
        </div>
        {/* Botón para enviar el enlace de recuperación */}
        <button type="submit" className="btn">
          Enviar enlace de recuperación
        </button>
      </form>
    </div>
  );
};

export default Recuperar;
