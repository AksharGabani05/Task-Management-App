import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    
    if (!formData.password) {
      toast.error("Password cannot be empty!");
      return;
    }

    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isEmailTaken = users.some((user) => user.email === formData.email);

    
    if (isEmailTaken) {
      toast.error("Email already registered!");
      return;
    }

    
    users.push({
      email: formData.email,
      password: formData.password,
    });

    localStorage.setItem("users", JSON.stringify(users));
    toast.success("Signup successful!", {
      onClose: () => navigate("/login"), 
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-blue-600">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="p-8 bg-white shadow-lg rounded-lg w-full sm:w-96">
        <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">
          Create an Account
        </h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md w-full hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
