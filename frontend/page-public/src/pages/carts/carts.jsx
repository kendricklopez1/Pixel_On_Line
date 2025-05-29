import React, { useState } from 'react';
import './carts.css'; // Estilos del carrito

// Imágenes de productos
import A6 from '../../assets/A6.jpeg';
import Bluethoo from '../../assets/bluetho.png';
import Rosaa from '../../assets/rosa.jpeg';
import Panda from '../../assets/Panda.jpeg';

const Cart = () => {
  // Estado que contiene los productos actualmente en el carrito
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Impresora Térmica A6', price: 29.99, img: A6 },
    { id: 2, name: 'Impresora Bluetooth Portátil', price: 35.50, img: Bluethoo },
    { id: 3, name: 'Mini Impresora Rosa', price: 27.99, img: Rosaa },
    { id: 4, name: 'Mini Impresora Panda', price: 27.25, img: Panda }
  ]);

  // Estado para mostrar mensaje cuando el carrito está vacío
  const [mensajeVacio, setMensajeVacio] = useState(false);

  // Estado para mostrar/ocultar el formulario de pago (modal)
  const [showModal, setShowModal] = useState(false);

  // Estado para mostrar mensaje de éxito tras completar el pago
  const [showSuccess, setShowSuccess] = useState(false);

  // Elimina un producto del carrito por su ID y muestra mensaje si el carrito queda vacío
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    if (updatedCart.length === 0) {
      setMensajeVacio(true);
    }
  };

  // Vacía completamente el carrito y muestra el mensaje de carrito vacío
  const emptyCart = () => {
    setCartItems([]);
    setMensajeVacio(true);
  };

  // Calcula el total sumando los precios de todos los productos del carrito
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Completa el proceso de pago: cierra el modal, muestra mensaje de éxito y lo oculta después de 3 segundos
  const handleCompletePayment = () => {
    setShowModal(false);
    setShowSuccess(true);

    // Desaparecer la alerta después de 3 segundos
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="tienda-container">
      <h2 className="titulo-tienda">Carrito de Compras</h2>

      {/* Si el carrito está vacío, se muestra una alerta */}
      {mensajeVacio ? (
        <div className="alerta-vacio">
          <p>🚨 Tu carrito está vacío 🚨</p>
        </div>
      ) : (
        <>
          {/* Muestra los productos en formato de tarjetas */}
          <div className="productos-grid">
            {cartItems.map((item) => (
              <div key={item.id} className="producto-card bounce-in">
                <img src={item.img} alt={item.name} className="producto-img" />
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                {/* Botón para eliminar producto individual */}
                <button className="btn" onClick={() => removeItem(item.id)}>Eliminar Producto</button>
              </div>
            ))}
          </div>

          {/* Muestra el total y botón para iniciar pago */}
          <div className="total-section fade-in">
            <button className="btn-total" onClick={() => setShowModal(true)}>
              Total a pagar: <span className="total-precio">${getTotal()}</span>
            </button>
          </div>

          {/* Formulario de Pago Modal */}
          {showModal && (
            <div className="modal">
              <div className="modal-content zoom-in">
                <h3>Formulario de Pago</h3>
                {/* Campos de formulario */}
                <input type="text" className="input-field" placeholder="Nombre Completo" required />
                <input type="text" className="input-field" placeholder="Dirección de Envío" required />
                <input type="text" className="input-field" placeholder="Número de Tarjeta" required />
                <div className="form-group">
                  <input type="text" className="input-field" placeholder="MM/AA" required />
                  <input type="text" className="input-field" placeholder="CVV" required />
                </div>
                {/* Botón para completar el pago */}
                <button className="btn-realizar-compra" onClick={handleCompletePayment}>
                  Realizar Compra
                </button>
                {/* Botón para cerrar el formulario sin pagar */}
                <button className="btn-cerrar-modal" onClick={() => setShowModal(false)}>Cerrar</button>
              </div>
            </div>
          )}

          {/* Alerta de Pago Exitoso */}
          {showSuccess && (
            <div className="alerta-pago-exitoso bounce-in">
              <p>✔️ Pago Exitoso! 🎉</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
