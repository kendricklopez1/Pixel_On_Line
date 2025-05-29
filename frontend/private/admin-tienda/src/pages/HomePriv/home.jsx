import React, { useEffect } from 'react';
import { Package, ShoppingCart, Users, MessageSquare } from 'lucide-react';
import '../Styles.css/Home.css';

const HomePriv = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const estadisticas = [
    { icon: <Package size={28} />, label: 'Productos', valor: 148 },
    { icon: <ShoppingCart size={28} />, label: 'Pedidos', valor: 86 },
    { icon: <Users size={28} />, label: 'Clientes', valor: 214 },
    { icon: <MessageSquare size={28} />, label: 'Mensajes', valor: 12 },
  ];

  const productosMasVendidos = [
    {
      nombre: 'Mini Printer T1',
      descripcion: 'Impresora portátil térmica con conectividad Bluetooth, ideal para etiquetas.',
      imagen: 'https://m.media-amazon.com/images/I/719XT8-WW0L.jpg',
    },
    {
      nombre: 'PocketPrint X200',
      descripcion: 'Ligera, recargable por USB, excelente para imprimir en movimiento.',
      imagen: 'https://m.media-amazon.com/images/I/51+akGING1L._AC_UF894,1000_QL80_.jpg',
    },
    {
      nombre: 'LabelJet ZM',
      descripcion: 'Impresora de etiquetas compacta para negocios pequeños.',
      imagen: 'https://cellshop.com.py/media/catalog/product/3/6/3643877_1_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=616&width=616&canvas=616:616',
    },
  ];

  return (
    <div className="home-privado"> {/* Cambiado a div para evitar problemas de renderizado */}
      <main className="home-content">
        <section className="estadisticas">
          {estadisticas.map(({ icon, label, valor }) => (
            <div key={label} className="card-estadistica">
              <div className="icono">{icon}</div>
              <div className="info">
                <p className="valor">{valor}</p>
                <p className="label">{label}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="productos-mas-vendidos">
          <h2>Productos Más Vendidos</h2>
          <div className="productos-lista">
            {productosMasVendidos.map(({ nombre, descripcion, imagen }) => (
              <article key={nombre} className="producto-card">
                <img src={imagen} alt={nombre} className="producto-imagen" />
                <h3 className="producto-nombre">{nombre}</h3>
                <p className="producto-descripcion">{descripcion}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePriv;
