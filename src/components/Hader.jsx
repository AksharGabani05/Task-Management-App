import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Hader() {
    const navigate = useNavigate();

    const handleLogout = () => {
        toast.success('Successfully signed out!');
        navigate('/'); 
    };


    return (
        <div>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                       
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex items-center">
                                <img
                                    className="h-8 w-auto"
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" // Replace with your logo URL
                                    alt="Logo"
                                />
                                <span className="text-white text-xl ml-2 font-bold">
                                    Task Management
                                </span>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

        
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default Hader;
