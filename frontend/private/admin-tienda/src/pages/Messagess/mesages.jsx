import React, { useEffect } from 'react';
import '../Styles.css/Messages.css'

const Messages = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="messages-container">
      <h1 className="messages-title">
        Centro de Mensajes
      </h1>

      {/* Panel principal */}
      <div className="messages-panel">
        {/* Lista de mensajes */}
        <div className="message-list">
          <div className="message-list-header">
            Mensajes Recibidos
          </div>
          <ul className="message-list-content">
            <li className="message-item">
              <h3 className="message-subject">Consulta sobre envío</h3>
              <p className="message-preview">Hola, quisiera saber cuánto tarda en llegar...</p>
              <span className="message-meta">andrea@example.com · 13/05/2025</span>
            </li>
            <li className="message-item">
              <h3 className="message-subject">Problema con mi pedido</h3>
              <p className="message-preview">Buenas, recibí un producto diferente al que pedí...</p>
              <span className="message-meta">juan.perez@example.com · 12/05/2025</span>
            </li>
            <li className="message-item">
              <h3 className="message-subject">¿Tienen garantía?</h3>
              <p className="message-preview">Quisiera saber si las impresoras vienen con garantía...</p>
              <span className="message-meta">luisa.martinez@example.com · 11/05/2025</span>
            </li>
            <li className="message-item">
              <h3 className="message-subject">Descuento por volumen</h3>
              <p className="message-preview">¿Ofrecen precios especiales por compras al por mayor?...</p>
              <span className="message-meta">ventas@empresa.com · 10/05/2025</span>
            </li>
            <li className="message-item">
              <h3 className="message-subject">Métodos de pago</h3>
              <p className="message-preview">¿Aceptan tarjetas internacionales?... </p>
              <span className="message-meta">carla23@example.com · 09/05/2025</span>
            </li>
            <li className="message-item">
              <h3 className="message-subject">Seguimiento de pedido</h3>
              <p className="message-preview">Hice un pedido hace 5 días y aún no tengo número de guía...</p>
              <span className="message-meta">miguelito@example.com · 08/05/2025</span>
            </li>
            <li className="message-item">
              <h3 className="message-subject">Solicitud de factura</h3>
              <p className="message-preview">Necesito la factura con mis datos fiscales...</p>
              <span className="message-meta">facturas@negocio.com · 07/05/2025</span>
            </li>
            <li className="message-item">
              <h3 className="message-subject">Error al pagar</h3>
              <p className="message-preview">Al intentar pagar me sale un error del sistema...</p>
              <span className="message-meta">cliente@email.com · 06/05/2025</span>
            </li>
            <li className="message-item">
              <h3 className="message-subject">Tiempo de entrega</h3>
              <p className="message-preview">Estoy en zona rural, ¿cuánto tarda en llegar?...</p>
              <span className="message-meta">davidzona@example.com · 05/05/2025</span>
            </li>
          </ul>
        </div>

        {/* Vista previa y respuesta */}
        <div className="message-preview-container">
          <h2 className="preview-title">Mensaje seleccionado</h2>
          <div className="preview-details">
            <p className="preview-from"><strong>De:</strong> andrea@example.com</p>
            <p className="preview-date"><strong>Fecha:</strong> 13 de mayo de 2025</p>
            <p className="preview-message">
              Hola, quisiera saber cuánto tarda en llegar una impresora portátil al interior del país.
              También necesito saber si aceptan pagos contra entrega. ¡Gracias!
            </p>
          </div>
          <textarea
            className="reply-textarea"
            placeholder="Escribe tu respuesta aquí..."
          ></textarea>
          <button className="send-reply-button">
            Enviar respuesta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
