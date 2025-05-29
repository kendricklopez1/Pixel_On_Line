import React, { useState } from 'react';
import confetti from 'canvas-confetti'; // Librería para lanzar confeti en pantalla
import './contact.css'; // Estilos CSS para la página de contacto

const Contact = () => {
  // Estado para mostrar mensaje de éxito tras enviar el formulario
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  // Estado que guarda los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  // Función para lanzar confeti visual en pantalla
  const lanzarConfeti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00ffe5', '#4ade80', '#ffffff', '#00d0ff'], // Colores personalizados
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto (recargar)
    setMensajeEnviado(true); // Activa el mensaje de éxito
    lanzarConfeti(); // Lanza confeti al enviar

    // Limpia los campos del formulario
    setFormData({
      nombre: '',
      email: '',
      mensaje: '',
    });

    // Oculta el mensaje de éxito después de 3 segundos
    setTimeout(() => {
      setMensajeEnviado(false);
    }, 3000);
  };

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualiza el estado con el nuevo valor del campo correspondiente
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Fondo animado decorativo */}
      <div className="contact-fondo-animado"></div>

      {/* Contenedor principal de la página */}
      <div className="contact-tienda-container">
        <h1 className="contact-titulo-tienda">Contáctanos</h1>

        {/* Formulario de contacto */}
        <form className="contact-formulario-contacto" onSubmit={handleSubmit}>
          {/* Campo: Nombre */}
          <div className="contact-campo-formulario">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          {/* Campo: Correo electrónico */}
          <div className="contact-campo-formulario">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Campo: Mensaje */}
          <div className="contact-campo-formulario">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Botón para enviar el formulario */}
          <button type="submit" className="contact-btn">Enviar Mensaje</button>
        </form>

        {/* Mensaje de éxito tras enviar el formulario */}
        {mensajeEnviado && (
          <div className="contact-modal-exito">✅ ¡Mensaje enviado con éxito!</div>
        )}
      </div>
    </>
  );
};

export default Contact;
