import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="logo">
          <a href="/#home">
            <img src="/logo5.png" alt="Logo do escritório" className="h-12" />
          </a>
        </div>

        <nav className="hidden md:flex space-x-6 text-black font-semibold">
          <a href="/#home" className="hover:text-brown2 transition">
            Início
          </a>
          <a href="/#atuacao" className="hover:text-brown2 transition">
            Áreas de Atuação
          </a>
          <a href="/#sobre" className="hover:text-brown2 transition">
            Sobre
          </a>
          <a href="/#contato" className="hover:text-brown2 transition">
            Contato
          </a>
          <a href="/artigos" className="hover:text-brown2 transition">
            Artigos
          </a>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-brown2 focus:outline-none text-3xl"
          aria-label="Abrir menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Menu Mobile */}
      <nav
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-black bg-opacity-95 z-50 flex flex-col items-center pt-20 space-y-8 text-xl font-semibold text-beige shadow-xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden transform`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-8 right-8 text-beige text-3xl"
          aria-label="Fechar menu"
        >
          <FaTimes />
        </button>

        <a
          href="#home"
          className="hover:text-brown2 transition"
          onClick={toggleMenu}
        >
          Início
        </a>
        <a
          href="#atuacao"
          className="hover:text-brown2 transition"
          onClick={toggleMenu}
        >
          Áreas de Atuação
        </a>
        <a
          href="#sobre"
          className="hover:text-brown2 transition"
          onClick={toggleMenu}
        >
          Sobre
        </a>
        <a
          href="#contato"
          className="hover:text-brown2 transition"
          onClick={toggleMenu}
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
