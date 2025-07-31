// src/components/Navbar.tsx
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      {!isOpen && (
        <button
          className="fixed top-4 right-4 z-50 p-2 bg-rose-500 text-white rounded-md"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Sidebar (overlay) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-rose-100/70 text-gray-900 shadow-lg z-40 transform transition-transform duration-300 rounded-tl-3xl rounded-bl-3xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="p-2 bg-rose-400 rounded-md text-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-4 p-6 text-lg italic ">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Our Services</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About our Studio</a>
          <a href="#booking" onClick={() => setIsOpen(false)}>Book your Appointment</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Get in Touch</a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
