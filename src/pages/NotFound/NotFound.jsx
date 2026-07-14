import {
  ArrowLeft,
  CalendarDays,
  Home,
  MapPinOff,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="notFoundPage">
      <section className="notFoundHero">
        <div className="notFoundContainer notFoundHero__layout">
          <div className="notFoundHero__content">
            <span className="notFoundEyebrow notFoundEyebrow--error">
                <MapPinOff size={18} />
                Página inexistente
            </span>

            <div className="notFoundCode" aria-hidden="true">
              404
            </div>

            <h1>Essa página não está no nosso mapa</h1>

            <p>
              O endereço pode estar incorreto, a página pode ter sido removida
              ou ainda não está disponível.
            </p>

            <div className="notFoundActions">
              <Link to="/" className="notFoundButton notFoundButton--primary">
                <Home size={18} />
                Voltar para o início
              </Link>

              <Link
                to="/eventos"
                className="notFoundButton notFoundButton--secondary"
              >
                <CalendarDays size={18} />
                Ver próximos eventos
              </Link>
            </div>
          </div>

          <div className="notFoundHero__visual" aria-hidden="true">
            <div className="notFoundMap">
              <div className="notFoundMap__ring notFoundMap__ring--one" />
              <div className="notFoundMap__ring notFoundMap__ring--two" />

              <div className="notFoundMap__icon">
                <MapPinOff size={78} strokeWidth={1.6} />
              </div>

              <span>Destino não localizado</span>
            </div>
          </div>
        </div>
      </section>

      <section className="notFoundHelp">
        <div className="notFoundContainer notFoundHelp__card">
          <div>
            <span>Continue navegando</span>
            <h2>Talvez você esteja procurando uma dessas áreas</h2>
          </div>

          <div className="notFoundLinks">
            <Link to="/sobre">
              <ArrowLeft size={16} />
              Sobre os ER
            </Link>

            <Link to="/associacoes">
              <ArrowLeft size={16} />
              Associações
            </Link>

            <Link to="/noticias">
              <ArrowLeft size={16} />
              Notícias
            </Link>

            <Link to="/materiais">
              <ArrowLeft size={16} />
              Materiais
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}