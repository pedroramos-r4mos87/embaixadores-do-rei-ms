import { Link } from "react-router-dom";
import logoEr from "../../assets/images/logo-er.png";
import "./Footer.css";
import {
  ExternalLink,
  Camera,
  Mail,
  MapPin,
} from "lucide-react";

const footerLinks = [
  { label: "Início", path: "/" },
  { label: "Sobre os ER", path: "/sobre" },
  { label: "ER em MS", path: "/er-em-ms" },
  { label: "Associações", path: "/associacoes" },
];

const resourceLinks = [
  { label: "Notícias", path: "/noticias" },
  { label: "Eventos", path: "/eventos" },
  { label: "Materiais", path: "/materiais" },
  { label: "Área do Conselheiro", path: "/login" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="siteFooter__yellowLine" />

      <div className="siteFooter__main">
        <div className="siteFooter__container">
          <div className="siteFooter__brand">
            <Link to="/" className="siteFooter__logoLink">
              <div className="siteFooter__logo">
                <img
                  src={logoEr}
                  alt="Logo dos Embaixadores do Rei"
                />
              </div>

              <div>
                <strong>Embaixadores do Rei</strong>
                <span>Mato Grosso do Sul</span>
              </div>
            </Link>

            <p>
              Formando meninos para servir a Cristo com fé, coragem,
              compromisso e propósito.
            </p>
          </div>

          <div className="siteFooter__column">
            <h2>Institucional</h2>

            <nav aria-label="Links institucionais">
              {footerLinks.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="siteFooter__column">
            <h2>Portal</h2>

            <nav aria-label="Links do portal">
              {resourceLinks.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="siteFooter__column siteFooter__contact">
            <h2>Contato</h2>

            <span>
              <MapPin size={17} />
              Campo Grande, Mato Grosso do Sul
            </span>

            <a href="mailto:contato@embaixadoresdoreims.com.br">
              <Mail size={17} />
              contato@embaixadoresdoreims.com.br
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <Camera size={17} />
              Instagram
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="siteFooter__bottom">
        <div className="siteFooter__bottomContent">
          <span>
            © {currentYear} Embaixadores do Rei de Mato Grosso do Sul.
          </span>

          <span>Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}