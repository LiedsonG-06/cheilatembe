// Navbar.jsx
import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // Detecta scroll (transparência + fechar dropdown ao voltar ao topo)
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      if (!scrolled) {
        setDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // garante estado correcto no refresh
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      const container = e.target.closest(".dropdown-container");
      if (!container) setDropdown(false);
    };

    if (dropdown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropdown]);

  const closeDropdown = () => setDropdown(false);

  return (
    <header className={`navbar ${isScrolled ? "navbar-transparent" : ""}`}>
      {/* LOGO */}
      <div className="nav-logo">
        <span>Cheila  <strong>Tembe</strong></span>
        
      </div>

      {/* Menu normal se NÃO tiver scroll */}
      {!isScrolled ? (
        <>
          <nav aria-label="Menu principal">
            <ul className="nav-menu">
              <li>
                <AnchorLink className="anchor-link" offset={50} href="#home">
                  Home
                </AnchorLink>
              </li>

              <li>
                <AnchorLink className="anchor-link" offset={50} href="#sobre">
                  Sobre mim
                </AnchorLink>
              </li>

              

              <li>
                <AnchorLink className="anchor-link" offset={50} href="#contacto">
                  Contacto
                </AnchorLink>
              </li>
            </ul>
          </nav>
          <AnchorLink className="nav-connect" offset={50} href="#contacto">
  Fale comigo
</AnchorLink>

         
        </>
      ) : (
        // Botão de 3 pontos com menu dropdown
        <div className="dropdown-container">
          <button
            className="dropdown-toggle"
            type="button"
            aria-label="Abrir menu"
            aria-expanded={dropdown}
            onClick={() => setDropdown((v) => !v)}
          >
            ⋮
          </button>

          {dropdown && (
            <div className="dropdown-menu" role="menu" aria-label="Menu dropdown">
            <AnchorLink className="dropdown-link" offset={50} href="#home" onClick={closeDropdown}>
  <span className="dropdown-item" role="menuitem">Home</span>
</AnchorLink>

              <AnchorLink
                className="anchor-link"
                offset={50}
                href="#sobre"
                onClick={closeDropdown}
              >
                <p role="menuitem">Sobre mim</p>
              </AnchorLink>


              <AnchorLink
                className="anchor-link"
                offset={50}
                href="#contacto"
                onClick={closeDropdown}
              >
                <p role="menuitem">Contacto</p>
              </AnchorLink>

              <AnchorLink
                className="anchor-link"
                offset={50}
                href="#contacto"
                onClick={closeDropdown}
              >
                <button className="nav-connect" type="button">
                  Fale comigo
                </button>
              </AnchorLink>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
