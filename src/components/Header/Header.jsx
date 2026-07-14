import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logoEr from "../../assets/images/transparent-logo-er.png";

const navigationItems = [
  { label: "Início", path: "/" },
  { label: "Sobre os ER", path: "/sobre" },
  { label: "ER no MS", path: "/er-no-ms" },
  { label: "Associações", path: "/associacoes" },
  { label: "Notícias", path: "/noticias" },
  { label: "Eventos", path: "/eventos" },
  { label: "Materiais", path: "/materiais" },
];



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
  setIsMenuOpen(false);
  }
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);




  return (
    <header className="siteHeader">
      <div className="siteHeader__topLine" />

      <div className="siteHeader__main">
        <div className="siteHeader__content">
          <NavLink
            to="/"
            className="siteHeader__brand"
            aria-label="Ir para a página inicial"
            onClick={closeMenu}
          >
            <div className="siteHeader__logo">
              <img src={logoEr} alt="Logo dos Embaixadores do Rei" />
           </div>

            <div className="siteHeader__brandText">
              <strong>Embaixadores do Rei</strong>
              <span>Mato Grosso do Sul</span>
            </div>
          </NavLink>

          <nav
            className={`siteHeader__nav ${
              isMenuOpen ? "siteHeader__nav--open" : ""
            }`}
            aria-label="Navegação principal"
          >
            <div className="siteHeader__mobileTitle">
              <span>Navegação</span>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="siteHeader__links">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `siteHeader__link ${
                      isActive ? "siteHeader__link--active" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <NavLink
              to="/login"
              className="siteHeader__counselorButton"
              onClick={closeMenu}
            >
              Área do Conselheiro
            </NavLink>
          </nav>

          <button
            type="button"
            className="siteHeader__menuButton"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <button
          type="button"
          className="siteHeader__overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Fechar menu"
        />
      )}
    </header>
  );
}