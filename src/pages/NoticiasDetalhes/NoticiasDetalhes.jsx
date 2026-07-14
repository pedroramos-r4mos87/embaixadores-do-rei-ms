import {
  ArrowLeft,
  CalendarDays,
  Clock,
  Newspaper,
  UserRound,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { news } from "../../data/news";
import "./NoticiasDetalhes.css";

export default function NoticiaDetalhes() {
  const { slug } = useParams();

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="articleNotFound">
        <Newspaper size={52} />
        <h1>Notícia não encontrada</h1>
        <p>O conteúdo procurado não existe ou foi removido.</p>

        <Link to="/noticias">
          <ArrowLeft size={17} />
          Voltar para notícias
        </Link>
      </section>
    );
  }

  return (
    <article className="articlePage">
      <header className="articleHero">
        <div className="articleContainer">
          <Link to="/noticias" className="articleBackLink">
            <ArrowLeft size={17} />
            Voltar para notícias
          </Link>

          <span className="articleCategory">{article.category}</span>

          <h1>{article.title}</h1>

          <p>{article.summary}</p>

          <div className="articleMeta">
            <span>
              <CalendarDays size={17} />
              {article.displayDate}
            </span>

            <span>
              <Clock size={17} />
              {article.readingTime}
            </span>

            <span>
              <UserRound size={17} />
              {article.author}
            </span>
          </div>
        </div>
      </header>

      <div className="articleContainer articleBody">
        <div className="articleCover">
          {article.image ? (
            <img src={article.image} alt={article.title} />
          ) : (
            <div className="articleCover__placeholder">
              <Newspaper size={62} />
              <span>Embaixadores do Rei — Mato Grosso do Sul</span>
            </div>
          )}
        </div>

        <div className="articleContent">
          {article.content.map((paragraph, index) => (
            <p key={`${article.id}-${index}`}>{paragraph}</p>
          ))}
        </div>

        <footer className="articleFooter">
          <div>
            <span>Publicado por</span>
            <strong>{article.author}</strong>
          </div>

          <Link to="/noticias">
            Ver outras notícias
          </Link>
        </footer>
      </div>
    </article>
  );
}