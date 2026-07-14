import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Newspaper,
  Search,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { news } from "../../data/news";
import "./Noticias.css";

const categories = [
  "Todas",
  "Eventos",
  "Institucional",
  "Materiais",
  "Associações",
  "Formação",
  "Embaixadas",
];

export default function Noticias() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredNews = news.find((item) => item.featured);

  const filteredNews = useMemo(() => {
    const normalizedSearch = searchTerm
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

    return news.filter((item) => {
      const matchesCategory =
        activeCategory === "Todas" || item.category === activeCategory;

      const searchableContent = `${item.title} ${item.summary} ${item.author}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      const matchesSearch = searchableContent.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="newsPage">
      <section className="newsHero">
        <div className="newsContainer newsHero__content">
          <span className="newsEyebrow">
            <Newspaper size={18} />
            Comunicação estadual
          </span>

          <h1>Notícias dos Embaixadores do Rei em Mato Grosso do Sul</h1>

          <p>
            Acompanhe eventos, ações das associações, materiais e informações
            importantes para embaixadores, conselheiros e igrejas.
          </p>
        </div>
      </section>

      {featuredNews && (
        <section className="newsFeatured">
          <div className="newsContainer">
            <article className="newsFeatured__card">
              <div className="newsFeatured__visual">
                {featuredNews.image ? (
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                  />
                ) : (
                  <div className="newsFeatured__placeholder">
                    <Newspaper size={58} />
                    <span>Notícia em destaque</span>
                  </div>
                )}
              </div>

              <div className="newsFeatured__content">
                <span className="newsTag">{featuredNews.category}</span>

                <h2>{featuredNews.title}</h2>

                <p>{featuredNews.summary}</p>

                <div className="newsMeta">
                  <span>
                    <CalendarDays size={16} />
                    {featuredNews.displayDate}
                  </span>

                  <span>
                    <Clock size={16} />
                    {featuredNews.readingTime}
                  </span>

                  <span>
                    <UserRound size={16} />
                    {featuredNews.author}
                  </span>
                </div>

                <Link
                  to={`/noticias/${featuredNews.slug}`}
                  className="newsButton"
                >
                  Ler notícia
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="newsContent">
        <div className="newsContainer">
          <div className="newsHeader">
            <div>
              <span className="newsSectionTag">Últimas atualizações</span>
              <h2>Confira as notícias</h2>
            </div>

            <label className="newsSearch">
              <Search size={19} />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Pesquisar notícia"
                aria-label="Pesquisar notícias"
              />
            </label>
          </div>

          <div className="newsFilters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "newsFilter newsFilter--active"
                    : "newsFilter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredNews.length > 0 ? (
            <div className="newsGrid">
              {filteredNews.map((item) => (
                <article key={item.id} className="newsCard">
                  <div className="newsCard__visual">
                    {item.image ? (
                      <img src={item.image} alt={item.title} />
                    ) : (
                      <Newspaper size={38} />
                    )}

                    <span>{item.category}</span>
                  </div>

                  <div className="newsCard__content">
                    <div className="newsCard__date">
                      <CalendarDays size={15} />
                      {item.displayDate}
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>

                    <div className="newsCard__footer">
                      <span>{item.readingTime}</span>

                      <Link to={`/noticias/${item.slug}`}>
                        Ler notícia
                        <ArrowRight size={17} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="newsEmpty">
              <Search size={40} />
              <h3>Nenhuma notícia encontrada</h3>
              <p>Tente alterar a pesquisa ou selecionar outra categoria.</p>
            </div>
          )}
        </div>
      </section>

      <section className="newsNewsletter">
        <div className="newsContainer newsNewsletter__card">
          <div>
            <span className="newsSectionTag newsSectionTag--yellow">
              Fique informado
            </span>

            <h2>Acompanhe as novidades dos ER em Mato Grosso do Sul</h2>

            <p>
              Notícias oficiais, eventos e comunicados importantes em um só
              lugar.
            </p>
          </div>

          <Link to="/eventos" className="newsNewsletter__link">
            Ver próximos eventos
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}