import React, { useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the toast styles
import { FaGoogle } from "react-icons/fa"; // Import Google icon

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Signup successful with Google!"); // Success toast after Google signup
      navigate("/todo");
    } catch (error) {
      console.error("Google signup failed:", error);
      setError("Google signup failed. Please try again.");
    }
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signup successful!"); // Success toast after email signup
      navigate("/todo");
    } catch (error) {
      console.error("Email signup failed:", error);
      setError("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full sm:w-96">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 mb-6">Create an Account</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleEmailSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md w-full hover:bg-indigo-700 transition"
          >
            Sign Up with Email
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-600">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleSignup}
          className="bg-blue-500 text-white px-6 py-3 rounded-md flex items-center justify-center w-full hover:bg-blue-600 transition"
        >
          <FaGoogle className="mr-2" /> Sign Up with Google
        </button>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/" className="text-indigo-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
