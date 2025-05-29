import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    const success = await login(email, password);
    if (success) {
      toast.success("Inicio de sesión exitoso.");
      navigate("/inicio");
    } else {
      toast.error("Credenciales incorrectas. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0c0c0c] text-white font-sans px-4">
      <Toaster position="top-center" />
      <div className="w-full max-w-md bg-[#1a1a1a] shadow-2xl rounded-2xl p-8 border border-[#333] relative animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-[#00ffc3] mb-2">Iniciar Sesión</h2>
        <p className="text-center text-gray-400 mb-6">Administrador</p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300 mb-1">Correo electrónico</label>
            <input
              type="email"
              className="w-full bg-transparent border border-[#555] rounded-md px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffc3]"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Contraseña</label>
            <input
              type="password"
              className="w-full bg-transparent border border-[#555] rounded-md px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffc3]"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-[#00ffc3]" />
              Recordar usuario
            </label>
            <a href="/recovery" className="hover:text-[#00ffc3]">¿Olvidaste tu contraseña?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#00ffc3] text-black font-bold py-2 rounded-md hover:bg-[#00e6b0] transition duration-200 shadow-md"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="text-center mt-6 text-xs text-gray-500">
          <a href="#" className="hover:text-[#00ffc3]">Términos y condiciones</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
