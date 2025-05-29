import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePriv from './pages/HomePriv/home';
import ProductManagement from './pages/Product-management/Product-management';
import OrderManagement from './pages/Order-management/Order-management';
import Customer from './pages/Customers/customers';
import Messages from './pages/Messagess/mesages';
import Suppliers from './pages/Suppliers/supplier';
import Models from './pages/Modelss/models';
import Mark from './pages/Mark/mark';
import Login from './pages/Login/login';

import PrivateRoute from './components/privateRoute/privateRoute';
import PrivateLayout from './components/privateLayout/PrivateLayout';
import { AuthProvider } from './context/AuthContext';

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route element={<PrivateLayout />}>
          <Route path="/inicio" element={<HomePriv />} />
          <Route path="/productos" element={<ProductManagement />} />
          <Route path="/pedidos" element={<OrderManagement />} />
          <Route path="/clientes" element={<Customer />} />
          <Route path="/mensajes" element={<Messages />} />
          <Route path="/provedores" element={<Suppliers />} />
          <Route path="/mark" element={<Mark />} />
          <Route path="/models" element={<Models />} />
        </Route>
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
