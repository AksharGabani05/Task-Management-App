import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2">
      <div className="max-w-4xl mx-auto text-center">
        <p>
          Created by <span className="font-bold">Akshar Gabani</span> - Task Management App |{" "}
          <a
            href="https://github.com/AksharGabani05" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
