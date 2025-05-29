// src/components/PrivateLayout.jsx
import React from 'react';
import NavPriv from '../navPriv';
import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  return (
    <div className="private-layout">
      <NavPriv />
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayout;
