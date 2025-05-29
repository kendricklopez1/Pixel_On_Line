// Importamos componentes esenciales de react-router-dom para el manejo de rutas en la aplicación
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importamos las páginas o vistas principales de la aplicación
import HomePriv from './pages/HomePriv/home';
import ProductManagement from './pages/Product-management/Product-management';
import OrderManagement from './pages/Order-management/Order-management';
import Customer from './pages/Customers/customers';
import Messages from './pages/Messagess/mesages';
import Suppliers from './pages/Suppliers/supplier';
import Models from './pages/Modelss/models';
import Mark from './pages/Mark/mark';
import Login from './pages/Login/login';

// Importamos componentes personalizados para manejo de rutas protegidas y layout privado
import PrivateRoute from './components/privateRoute/privateRoute';
import PrivateLayout from './components/privateLayout/PrivateLayout';

// Importamos el contexto de autenticación para proveer estado de usuario a toda la app
import { AuthProvider } from './context/AuthContext';

// Componente que contiene la definición de todas las rutas de la aplicación
function AppContent() {
  return (
    <Routes>
      {/* Ruta raíz: redirige automáticamente al login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Ruta pública para la página de login */}
      <Route path="/login" element={<Login />} />

      {/* Rutas protegidas por autenticación */}
      <Route element={<PrivateRoute />}>
        {/* Layout privado que envuelve todas las páginas protegidas para dar estructura común */}
        <Route element={<PrivateLayout />}>
          {/* Página principal después de login */}
          <Route path="/inicio" element={<HomePriv />} />

          {/* Gestión de productos */}
          <Route path="/productos" element={<ProductManagement />} />

          {/* Gestión de pedidos */}
          <Route path="/pedidos" element={<OrderManagement />} />

          {/* Gestión de clientes */}
          <Route path="/clientes" element={<Customer />} />

          {/* Página de mensajes */}
          <Route path="/mensajes" element={<Messages />} />

          {/* Gestión de proveedores */}
          <Route path="/provedores" element={<Suppliers />} />

          {/* Página relacionada con marcas */}
          <Route path="/mark" element={<Mark />} />

          {/* Página relacionada con modelos */}
          <Route path="/models" element={<Models />} />
        </Route>
      </Route>
    </Routes>
  );
}

// Componente principal de la aplicación
function App() {
  return (
    // Proveedor de rutas que habilita la navegación en la app
    <Router>
      {/* Proveedor de contexto que maneja el estado de autenticación y usuario */}
      <AuthProvider>
        {/* Renderiza todas las rutas definidas en AppContent */}
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

// Exportamos el componente principal para que sea usado en el punto de entrada de React
export default App;
