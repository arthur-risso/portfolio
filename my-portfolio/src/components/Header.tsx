import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-semibold">Meu Portfólio</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:underline">
              Sobre
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
