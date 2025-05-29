import React, { useState, useEffect } from 'react';
import './profile.css';

const Profile = () => {
  // Estado para almacenar la información del perfil del usuario
  const [formData, setFormData] = useState({
    name: '', // Nombre completo
    email: '', // Correo electrónico
    phone: '', // Teléfono
    address: '', // Dirección
    profilePicture: '', // Foto de perfil
  });

  const [alertMessage, setAlertMessage] = useState(''); // Estado para mostrar alertas
  const [previewImage, setPreviewImage] = useState(null); // Para la vista previa de la foto de perfil
  const [passwordData, setPasswordData] = useState({
    currentPassword: '', // Contraseña actual
    newPassword: '', // Nueva contraseña
    confirmPassword: '', // Confirmación de la nueva contraseña
  });

  // useEffect para cargar la información del usuario cuando el componente se monta
  useEffect(() => {
    const fetchUserData = async () => {
      // Simulación de datos del usuario
      const userData = {
        name: 'Juan Pérez',
        email: 'juanperez@example.com',
        phone: '123-456-7890',
        address: 'Calle Ficticia 123',
        profilePicture: 'https://via.placeholder.com/150', // Imagen de perfil por defecto
      };
      // Establecer los datos del usuario en el estado
      setFormData(userData);
    };

    fetchUserData();
  }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

  // Función para manejar el cambio en los campos de texto del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Desestructuramos el nombre y valor del campo
    setFormData((prevData) => ({
      ...prevData, // Mantener los valores anteriores
      [name]: value, // Actualizar solo el campo modificado
    }));
  };

  // Función para manejar el cambio en los campos de la contraseña
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData, // Mantener los valores anteriores de las contraseñas
      [name]: value, // Actualizar solo el campo modificado
    }));
  };

  // Función para manejar la selección de una nueva imagen de perfil
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Obtenemos el archivo seleccionado
    if (file) {
      const objectURL = URL.createObjectURL(file); // Crear una URL para la vista previa de la imagen
      setPreviewImage(objectURL); // Establecer la vista previa de la imagen
      setFormData((prevData) => ({
        ...prevData, // Mantener los datos anteriores
        profilePicture: file, // Actualizar solo la imagen de perfil
      }));
    }
  };

  // Función para manejar el envío del formulario de actualización de datos
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    setAlertMessage('¡Datos actualizados correctamente!'); // Mostrar mensaje de éxito
    
    // Limpiar los campos después de 3 segundos
    setTimeout(() => {
      setFormData({
        name: '', // Limpiar el nombre
        email: '', // Limpiar el correo electrónico
        phone: '', // Limpiar el teléfono
        address: '', // Limpiar la dirección
        profilePicture: '', // Limpiar la foto de perfil
      });
      setPreviewImage(null); // Limpiar la vista previa de la imagen
      setAlertMessage(''); // Limpiar el mensaje de alerta
    }, 3000); // Esperar 3 segundos antes de limpiar
  };

  // Función para manejar el envío del formulario de actualización de la contraseña
  const handlePasswordSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Verificar si las contraseñas nueva y de confirmación coinciden
    if (passwordData.newPassword === passwordData.confirmPassword) {
      setAlertMessage('¡Contraseña actualizada correctamente!'); // Mostrar mensaje de éxito
      setTimeout(() => {
        setPasswordData({
          currentPassword: '', // Limpiar la contraseña actual
          newPassword: '', // Limpiar la nueva contraseña
          confirmPassword: '', // Limpiar la confirmación de la nueva contraseña
        });
        setAlertMessage(''); // Limpiar el mensaje de alerta
      }, 3000); // Esperar 3 segundos antes de limpiar
    } else {
      setAlertMessage('Las contraseñas no coinciden. Intenta nuevamente.'); // Mostrar mensaje de error
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>Perfil de Usuario</h2>
        {/* Mostrar mensaje de alerta si existe */}
        {alertMessage && (
          <div className="alert">
            <p>{alertMessage}</p>
          </div>
        )}

        {/* Contenedor para la foto de perfil */}
        <div className="profile-picture-container">
          <img
            src={previewImage || formData.profilePicture} // Mostrar la vista previa o la imagen por defecto
            alt="Foto de perfil"
            className="profile-picture"
          />
          {/* Campo de entrada para cargar una nueva imagen */}
          <input
            type="file"
            accept="image/*" // Aceptar solo imágenes
            onChange={handleFileChange} // Manejar el cambio en el archivo seleccionado
            className="file-input"
          />
        </div>

        {/* Formulario para actualizar los datos del perfil */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name} // Valor del campo es el estado
              onChange={handleInputChange} // Manejar el cambio en el campo
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email} // Valor del campo es el estado
              onChange={handleInputChange} // Manejar el cambio en el campo
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone} // Valor del campo es el estado
              onChange={handleInputChange} // Manejar el cambio en el campo
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address} // Valor del campo es el estado
              onChange={handleInputChange} // Manejar el cambio en el campo
              required
            />
          </div>
          {/* Botón para actualizar los datos */}
          <div className="btn-container">
            <button type="submit" className="btn-update">Actualizar Datos</button>
          </div>
        </form>

        {/* Formulario para actualizar la contraseña */}
        <div className="password-update">
          <h3>Actualizar Contraseña</h3>
          <form onSubmit={handlePasswordSubmit}>
            <div className="input-group">
              <label htmlFor="currentPassword">Contraseña actual</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={passwordData.currentPassword} // Valor del campo es el estado
                onChange={handlePasswordChange} // Manejar el cambio en el campo
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="newPassword">Nueva contraseña</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={passwordData.newPassword} // Valor del campo es el estado
                onChange={handlePasswordChange} // Manejar el cambio en el campo
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirmar nueva contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={passwordData.confirmPassword} // Valor del campo es el estado
                onChange={handlePasswordChange} // Manejar el cambio en el campo
                required
              />
            </div>
            {/* Botón para actualizar la contraseña */}
            <div className="btn-container">
              <button type="submit" className="btn-update">Actualizar Contraseña</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
