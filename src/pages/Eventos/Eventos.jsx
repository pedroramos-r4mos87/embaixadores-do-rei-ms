import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { events } from "../../data/events";
import "./Eventos.css";

const filters = ["Todos", "Estadual", "Associação", "Formação"];

export default function Eventos() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredEvent = events.find(
    (event) => event.featured && event.status === "upcoming",
  );

  const upcomingEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesStatus = event.status === "upcoming";
      const matchesFilter =
        activeFilter === "Todos" || event.category === activeFilter;

      const normalizedSearch = searchTerm.toLowerCase();

      const matchesSearch =
        event.title.toLowerCase().includes(normalizedSearch) ||
        event.location.toLowerCase().includes(normalizedSearch);

      return matchesStatus && matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const pastEvents = events.filter((event) => event.status === "past");

  return (
    <div className="eventsPage">
      <section className="eventsHero">
        <div className="eventsContainer eventsHero__content">
          <div>
            <span className="eventsEyebrow">
              <CalendarDays size={18} />
              Calendário estadual
            </span>

            <h1>Eventos que conectam, formam e fortalecem</h1>

            <p>
              Confira as próximas programações dos Embaixadores do Rei em Mato
              Grosso do Sul.
            </p>
          </div>
        </div>
      </section>

      {featuredEvent && (
        <section className="eventsFeatured">
          <div className="eventsContainer">
            <article className="eventsFeatured__card">
              <div className="eventsFeatured__date">
                <span>25</span>
                <strong>JUL</strong>
                <small>2026</small>
              </div>

              <div className="eventsFeatured__content">
                <span className="eventsTag">Próximo evento</span>

                <h2>{featuredEvent.title}</h2>

                <p>{featuredEvent.description}</p>

                <div className="eventsMeta">
                  <span>
                    <CalendarDays size={17} />
                    {featuredEvent.displayDate}
                  </span>

                  <span>
                    <Clock size={17} />
                    {featuredEvent.time}
                  </span>

                  <span>
                    <MapPin size={17} />
                    {featuredEvent.location}
                  </span>
                </div>
              </div>

              <Link
                to={`/eventos/${featuredEvent.slug}`}
                className="eventsButton eventsButton--yellow"
              >
                Ver detalhes
                <ArrowRight size={18} />
              </Link>
            </article>
          </div>
        </section>
      )}

      <section className="eventsContent">
        <div className="eventsContainer">
          <div className="eventsHeader">
            <div>
              <span className="eventsSectionTag">Próximas programações</span>
              <h2>Encontre o próximo evento</h2>
            </div>

            <div className="eventsSearch">
              <Search size={19} />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Pesquisar evento ou cidade"
                aria-label="Pesquisar eventos"
              />
            </div>
          </div>

          <div className="eventsFilters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? "eventsFilter eventsFilter--active"
                    : "eventsFilter"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="eventsGrid">
              {upcomingEvents.map((event) => (
                <article key={event.id} className="eventCard">
                  <div className="eventCard__top">
                    <span>{event.category}</span>
                    <CalendarDays size={23} />
                  </div>

                  <h3>{event.title}</h3>
                  <p>{event.description}</p>

                  <div className="eventCard__meta">
                    <span>
                      <CalendarDays size={16} />
                      {event.displayDate}
                    </span>

                    <span>
                      <Clock size={16} />
                      {event.time}
                    </span>

                    <span>
                      <MapPin size={16} />
                      {event.location}
                    </span>
                  </div>

                  <Link to={`/eventos/${event.slug}`}>
                    Ver informações
                    <ArrowRight size={17} />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="eventsEmpty">
              <CalendarDays size={38} />
              <h3>Nenhum evento encontrado</h3>
              <p>Tente alterar o filtro ou o termo pesquisado.</p>
            </div>
          )}
        </div>
      </section>

      <section className="eventsPast">
        <div className="eventsContainer">
          <div className="eventsPast__header">
            <span className="eventsSectionTag">Memória</span>
            <h2>Eventos realizados</h2>
          </div>

          <div className="eventsPast__list">
            {pastEvents.map((event) => (
              <article key={event.id} className="eventsPast__item">
                <div>
                  <span>{event.displayDate}</span>
                  <h3>{event.title}</h3>
                </div>

                <span className="eventsPast__location">
                  <MapPin size={16} />
                  {event.location}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}