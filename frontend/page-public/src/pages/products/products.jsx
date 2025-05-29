import React, { useState } from 'react';
import './products.css';
import A6 from '../../assets/A6.jpeg';
import Bluetho from '../../assets/bluetho.png';
import Rosa from '../../assets/rosa.jpeg';
import Panda from '../../assets/Panda.jpeg';
import Papel from '../../assets/papel.jpg';
import Azul from '../../assets/azul.png';
import A4 from '../../assets/A4.webp';
import Ibi from '../../assets/Ibi.jpg';
import QR from '../../assets/QR.webp';
import Vretti from '../../assets/vretti.jpg';
import Pocket from '../../assets/pocket.webp';
import Printer from '../../assets/printer.jpg';

const Products = () => {
  // Estado que controla qué detalles se muestran para cada producto
  const [detallesVisibles, setDetallesVisibles] = useState(Array(12).fill(false));

  // Función para alternar la visibilidad de los detalles de cada producto
  const toggleDetalle = (index) => {
    const nuevosDetalles = [...detallesVisibles];
    nuevosDetalles[index] = !nuevosDetalles[index];
    setDetallesVisibles(nuevosDetalles);
  };

  return (
    <div className="tienda-container">
      <h2 className="titulo-tienda">Nuestros Productos</h2>
      <div className="productos-grid">
        {/* Primer producto */}
        <div className="producto-card">
          <img src={A6} alt="Impresora Térmica A6" className="producto-img" />
          <h3>Impresora Térmica A6</h3>
          <p>$29.99</p>
          <button className="btn" onClick={() => toggleDetalle(0)}>Ver características</button>
          {detallesVisibles[0] && 
            <div className="caracteristicas">
              <p>Tipo: Térmica directa</p>
              <p>Conectividad: USB</p>
              <p>Tamaño de papel: A6</p>
              <p>Portátil: Sí</p>
              <p>Batería recargable: Sí</p>
              <p>Descripción: Compacta y ligera, ideal para uso en cualquier lugar. Su tecnología térmica ofrece impresiones nítidas sin necesidad de tinta.</p>
            </div>
          }
          <button className="btn">Agregar al carrito</button>
        </div>

        {/* Segundo producto */}
        <div className="producto-card">
          <img src={Bluetho} alt="Impresora Bluetooth" className="producto-img" />
          <h3>Impresora Bluetooth</h3>
          <p>$34.99</p>
          <button className="btn" onClick={() => toggleDetalle(1)}>Ver características</button>
          {detallesVisibles[1] && 
            <div className="caracteristicas">
              <p>Tipo: Térmica</p>
              <p>Conectividad: Bluetooth</p>
              <p>Compatibilidad: Android/iOS</p>
              <p>Autonomía: 6 horas</p>
              <p>Peso: 180g</p>
              <p>Descripción: Esta impresora Bluetooth ofrece una gran movilidad y conectividad sin cables, perfecta para usuarios móviles.</p>
            </div>
          }
          <button className="btn">Agregar al carrito</button>
        </div>

        {/* Tercer producto */}
        <div className="producto-card">
          <img src={Rosa} alt="Mini Impresora Rosa" className="producto-img" />
          <h3>Mini Impresora Rosa</h3>
          <p>$31.50</p>
          <button className="btn" onClick={() => toggleDetalle(2)}>Ver características</button>
          {detallesVisibles[2] && 
            <div className="caracteristicas">
              <p>Color: Rosa pastel</p>
              <p>Compatible con app móvil</p>
              <p>Tamaño compacto</p>
              <p>Tipo: Térmica</p>
              <p>Incluye cable USB</p>
              <p>Descripción: Perfecta para regalar, es ligera, portátil y permite imprimir fotos o documentos desde tu teléfono móvil.</p>
            </div>
          }
          <button className="btn">Agregar al carrito</button>
        </div>

        {/* Cuarto producto */}
        <div className="producto-card">
          <img src={Panda} alt="Mini Impresora Panda" className="producto-img" />
          <h3>Mini Impresora Panda</h3>
          <p>$27.25</p>
          <button className="btn" onClick={() => toggleDetalle(3)}>Ver características</button>
          {detallesVisibles[3] && 
            <div className="caracteristicas">
              <p>Diseño: Panda adorable</p>
              <p>Ideal para niños</p>
              <p>Segura y rápida</p>
              <p>Portátil y ligera</p>
              <p>Impresión sin tinta</p>
              <p>Descripción: Con su diseño único, es ideal para los más pequeños, permitiendo imprimir notas y dibujos de forma divertida.</p>
            </div>
          }
          <button className="btn">Agregar al carrito</button>
        </div>

        {/* Quinto producto */}
        <div className="producto-card">
          <img src={Papel} alt="Papel de Impresora" className="producto-img" />
          <h3>Papel de Impresora</h3>
          <p>$33.10</p>
          <button className="btn" onClick={() => toggleDetalle(4)}>Ver características</button>
          {detallesVisibles[4] && 
            <div className="caracteristicas">
              <p>50 rollos térmicos</p>
              <p>Tamaño universal</p>
              <p>Papel adhesivo</p>
              <p>No necesita tinta</p>
              <p>Duración: 5 años</p>
              <p>Descripción: Este pack de 50 rollos térmicos es ideal para mantener la impresora funcionando durante largos periodos sin necesidad de tinta.</p>
            </div>
          }
          <button className="btn">Agregar al carrito</button>
        </div>

        {/* Sexto producto */}
        <div className="producto-card">
          <img src={Azul} alt="Mini Impresora Azul" className="producto-img" />
          <h3>Mini Impresora Azul</h3>
          <p>$28.75</p>
          <button className="btn" onClick={() => toggleDetalle(5)}>Ver características</button>
          {detallesVisibles[5] && 
            <div className="caracteristicas">
              <p>Conexión: Bluetooth</p>
              <p>Compatible con iOS/Android</p>
              <p>Diseño compacto</p>
              <p>Autonomía: 8 horas</p>
              <p>Incluye cable USB-C</p>
              <p>Descripción: Ideal para quienes buscan una impresora pequeña, rápida y compatible con dispositivos móviles a través de Bluetooth.</p>
            </div>
          }
          <button className="btn">Agregar al carrito</button>
        </div>

        {/* Séptimo producto */}
        <div className="producto-card">
          <img src={A4} alt="Compacta Black A4" className="producto-img" />
          <h3>Compacta Black A4</h3>
          <p>$30.99</p>
          <button className="btn" onClick={() => toggleDetalle(6)}>Ver características</button>
          {detallesVisibles[6] && 
            <div className="caracteristicas">
              <p>Imprime en A4</p>
              <p>Alta resolución</p>
              <p>Diseño moderno</p>
              <p>Compatible con varios dispositivos</p>
              <p>Conexión USB y Bluetooth</p>
              <p>Descripción: Su capacidad para imprimir documentos en tamaño A4 y su diseño elegante la hacen perfecta para oficinas y hogares.</p>
            </div>
          }
          <button className="btn">Agregar al carrito</button>
        </div>

        {/* Octavo producto */}
        <div className="producto-card">
          <img src={Ibi} alt="Inpresora Ibi Craft" className="producto-img" />
          <h3>Inpresora Ibi Craft</h3>
          <p>$26.89</p>
          <button className="btn" onClick={() => toggleDetalle(7)}>Ver características</button>
          {detallesVisibles[7] && 
            <div className="caracteristicas">
              <p>Ideal para manualidades</p>
              <p>Ideal para scrapbooking</p>
              <p>Conectividad Bluetooth</p>
              <p>Impresión de etiquetas</p>
              <p>Recargable vía USB</p>
              <p>Descripción: Perfecta para las manualidades y el scrapbooking, permite imprimir etiquetas y otros proyectos creativos.</p>
            </div>
          }
          <button className="btn">Agregar al carrito</button>
        </div>

        {/* Noveno producto */}
        <div className="producto-card">
          <img src={QR} alt="Mini Impresora QR" className="producto-img" />
          <h3>Mini Impresora QR</h3>
          <p>$35.00</p>
          <button className="btn" onClick={() => toggleDetalle(8)}>Ver características</button>
          {detallesVisibles[8] && 
            <div className="caracteristicas">
              <p>Imprime códigos QR</p>
              <p>Impresión rápida</p>
              <p>Portátil y ligera</p>
              <p>Ideal para negocios</p>
              <p>Conexión Bluetooth</p>
              <p>Descripción: Ideal para negocios que necesitan imprimir códigos QR rápidamente, sin necesidad de tinta o cartuchos.</p>
            </div>
          }
          <button className="btn">Agregar al carrito</button>
        </div>

        {/* Décimo producto */}
        <div className="producto-card">
          <img src={Vretti} alt="Impresora vretti Adhesiva" className="producto-img" />
          <h3>Impresora vretti Adhesiva</h3>
          <p>$38.20</p>
          <button className="btn" onClick={() => toggleDetalle(9)}>Ver características</button>
          {detallesVisibles[9] && 
            <div className="caracteristicas">
              <p>Adhesivo térmico</p>
              <p>Ideal para negocios pequeños</p>
              <p>Conexión Bluetooth</p>
              <p>Fácil de usar</p>
              <p>Compacta</p>
              <p>Descripción: Su funcionalidad adhesiva es ideal para etiquetas y pequeñas etiquetas de envío, facilitando la organización en tu negocio.</p>
            </div>
          }
          <button className="btn">Agregar al carrito</button>
        </div>

        {/* Undécimo producto */}
        <div className="producto-card">
          <img src={Pocket} alt="Pocket Printer" className="producto-img" />
          <h3>Pocket Printer</h3>
          <p>$40.00</p>
          <button className="btn" onClick={() => toggleDetalle(10)}>Ver características</button>
          {detallesVisibles[10] && 
            <div className="caracteristicas">
              <p>Súper portátil</p>
              <p>Recargable por USB-C</p>
              <p>Impresión sin tinta</p>
              <p>Ideal para viajes</p>
              <p>Pesa solo 180g</p>
              <p>Descripción: Imprime directamente desde tu móvil, perfecta para llevar en viajes o imprimir recuerdos al instante.</p>
            </div>
          }
          <button className="btn">Agregar al carrito</button>
        </div>

        {/* Duodécimo producto */}
        <div className="producto-card">
          <img src={Printer} alt="Printer Verde" className="producto-img" />
          <h3>Printer Verde</h3>
          <p>$29.95</p>
          <button className="btn" onClick={() => toggleDetalle(11)}>Ver características</button>
          {detallesVisibles[11] && 
            <div className="caracteristicas">
              <p>Ecológica, bajo consumo</p>
              <p>Impresión eficiente</p>
              <p>Impresión de etiquetas</p>
              <p>Conectividad Bluetooth</p>
              <p>Ideal para negocios</p>
              <p>Descripción: Esta impresora ecológica está diseñada para trabajos de impresión rápida y económica, ideal para pequeñas empresas.</p>
            </div>
          }
          <button className="btn">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
  