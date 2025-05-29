import React, { useEffect } from 'react';
import '../Styles.css/Order-management.css';

const OrderManagement = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const orders = [
    { id: 1001, client: 'Carlos Méndez', date: '2025-05-13', total: 120.0, status: 'Pendiente' },
    { id: 1002, client: 'Ana García', date: '2025-05-12', total: 250.0, status: 'Enviado' },
    { id: 1003, client: 'Juan Pérez', date: '2025-05-11', total: 85.5, status: 'Entregado' },
    { id: 1004, client: 'María López', date: '2025-05-10', total: 150.0, status: 'Cancelado' },
    { id: 1005, client: 'Pedro Ramírez', date: '2025-05-09', total: 95.0, status: 'Pendiente' },
    { id: 1006, client: 'Laura Martínez', date: '2025-05-08', total: 320.0, status: 'Enviado' },
    { id: 1007, client: 'Javier Hernández', date: '2025-05-07', total: 110.0, status: 'Entregado' },
    { id: 1008, client: 'Sofía Díaz', date: '2025-05-06', total: 180.0, status: 'Cancelado' },
    { id: 1009, client: 'Diego Rodríguez', date: '2025-05-05', total: 75.0, status: 'Pendiente' },
    { id: 1010, client: 'Isabel Gómez', date: '2025-05-04', total: 210.0, status: 'Enviado' },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pendiente':
        return '#f0ad4e';
      case 'enviado':
        return '#5bc0de';
      case 'entregado':
        return '#5cb85c';
      case 'cancelado':
        return '#d9534f';
      default:
        return '#ccc';
    }
  };

  return (
    <div className="order-management-container">
      <h1>Gestión de Pedidos</h1>

      {/* Filtro por estado */}
      <div>
        <input
          type="text"
          placeholder="Buscar por cliente o ID..."
          className="filter-input"
        />
        <select className="filter-select">
          <option value="">Filtrar por estado</option>
          <option value="pendiente">Pendiente</option>
          <option value="enviado">Enviado</option>
          <option value="entregado">Entregado</option>
          <option value="cancelado">Cancelado</option>
        </select>
      </div>

      {/* Tabla de pedidos */}
      <div>
        <table className="orders-table">
          <thead>
            <tr>
              <th># Pedido</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.client}</td>
                <td>{order.date}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>
                  <span
                    style={{
                      backgroundColor: getStatusColor(order.status),
                      color: '#fff',
                      padding: '4px 8px',
                      borderRadius: '5px',
                      fontWeight: 'bold',
                      textTransform: 'capitalize',
                    }}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="order-actions">
                  <button className="Ver">Ver</button>
                  <button className="Cancelar">Cancelar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
