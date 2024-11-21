import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (!user) {
      setError("Invalid email or password.");
      toast.error("Invalid email or password.");
      return;
    }

    // Show success toast and redirect
    toast.success("Login successful!", {
      onClose: () => navigate("/todo"), // Redirect after toast closes
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-500 to-red-600">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="p-8 bg-white shadow-lg rounded-lg w-full sm:w-96">
        <h1 className="text-3xl font-semibold text-center text-red-700 mb-6">
          Welcome Back!
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-md w-full hover:bg-red-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-red-600 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
