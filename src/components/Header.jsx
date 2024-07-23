import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="logo.png"
            alt="Christ University Logo"
            className="h-10 mr-2"
          />
          <h1 className="text-2xl">ChristConnect</h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#features" className="hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
