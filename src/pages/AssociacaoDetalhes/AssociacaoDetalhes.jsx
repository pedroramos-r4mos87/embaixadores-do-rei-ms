import {
  ArrowLeft,
  CalendarDays,
  Church,
  Camera,
  Mail,
  MapPin,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { associationRegions } from "../../data/associationRegions";
import "./AssociacaoDetalhes.css";

export default function AssociacaoDetalhes() {
  const { slug } = useParams();

  const association = Object.values(associationRegions).find(
    (item) => item.slug === slug || item.id === slug,
  );

  if (!association) {
    return (
      <section className="associationNotFound">
        <h1>Associação não encontrada</h1>

        <Link to="/associacoes">
          <ArrowLeft size={17} />
          Voltar para associações
        </Link>
      </section>
    );
  }

  return (
    <main className="associationPage">
      <section className="associationHero">
        <div className="associationContainer associationHero__layout">
          <div className="associationHero__content">
            <Link to="/associacoes" className="associationBackLink">
              <ArrowLeft size={17} />
              Voltar para associações
            </Link>

            <span className="associationEyebrow">
              <MapPin size={18} />
              Embaixadores do Rei em MS
            </span>

            <h1>{association.name}</h1>
            <span className="associationHero__acronym">
            {association.acronym}
            </span>

            <p>{association.description}</p>

            {association.history?.map((paragraph, index) => (
            <p key={`${association.id}-history-${index}`}>
                {paragraph}
            </p>
            ))}
            <div className="associationHero__stats">
              <div>
                <strong>{association.embassies}</strong>
                <span>Embaixadas</span>
              </div>

              <div>
                <strong>{association.cities.length}</strong>
                <span>Municípios</span>
              </div>

              <div>
                <strong>{association.churches?.length ?? 0}</strong>
                <span>Igrejas</span>
              </div>
            </div>
          </div>

          <div className="associationHero__visual">
            <div className="associationBadge">
              <div className="associationBadge__icon">
                <ShieldCheck size={72} strokeWidth={1.7} />
              </div>

              <span>Associação ativa</span>
              <strong>{association.shortName}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="associationOverview">
        <div className="associationContainer associationOverview__grid">
          <div className="associationOverview__content">
            <span className="associationSectionTag">
              Sobre a associação
            </span>

            <h2>Conectando igrejas e fortalecendo embaixadas</h2>

            <p>{association.description}</p>

            <p>
              A associação atua aproximando conselheiros, igrejas e
              embaixadores por meio de eventos, formação e acompanhamento
              regional.
            </p>
          </div>

          <aside className="associationOverview__card">
            <UsersRound size={32} />

            <h3>Trabalho associacional</h3>

            <p>
              Integração, formação de líderes, eventos e fortalecimento das
              embaixadas locais.
            </p>
          </aside>
        </div>
      </section>

      <section className="associationCities">
        <div className="associationContainer">
          <header className="associationSectionHeader">
            <div>
              <span className="associationSectionTag">
                Área de atuação
              </span>

              <h2>Municípios da Associação {association.shortName}</h2>
            </div>

            <span className="associationCount">
              {association.cities.length} municípios
            </span>
          </header>

          <div className="associationCities__grid">
            {association.cities.map((city) => (
              <article key={city} className="associationCityCard">
                <MapPin size={18} />
                <span>{city}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="associationChurches">
        <div className="associationContainer">
          <header className="associationSectionHeader">
            <div>
              <span className="associationSectionTag">
                Embaixadas locais
              </span>

              <h2>Igrejas e embaixadas vinculadas</h2>
            </div>
          </header>

          {association.churches?.length > 0 ? (
            <div className="associationChurches__grid">
              {association.churches.map((church) => (
                <article
                  key={church.id ?? church.name}
                  className="associationChurchCard"
                >
                  <div className="associationChurchCard__icon">
                    <Church size={25} />
                  </div>

                  <div>
                    <span>{church.city}</span>
                    <h3>{church.name}</h3>

                    {church.embassyName && (
                      <p>{church.embassyName}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="associationEmpty">
              <Church size={38} />

              <h3>Embaixadas em atualização</h3>

              <p>
                A relação completa de igrejas e embaixadas será adicionada em
                breve.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="associationLeadership">
        <div className="associationContainer">
          <header className="associationSectionHeader">
            <div>
              <span className="associationSectionTag">
                Liderança
              </span>

              <h2>Equipe da Associação {association.shortName}</h2>
            </div>
          </header>

          {association.leadership?.length > 0 ? (
            <div className="associationLeadership__grid">
              {association.leadership.map((leader) => (
                <article
                  key={leader.id ?? leader.name}
                  className="associationLeaderCard"
                >
                  <div className="associationLeaderCard__avatar">
                    {leader.image ? (
                      <img src={leader.image} alt={leader.name} />
                    ) : (
                      <UsersRound size={32} />
                    )}
                  </div>

                  <div>
                    <span>{leader.role}</span>
                    <h3>{leader.name}</h3>
                    {leader.church && (
                    <p>{leader.church}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="associationEmpty">
              <UsersRound size={38} />

              <h3>Liderança em atualização</h3>

              <p>
                Os nomes da equipe associacional serão adicionados em breve.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="associationEvents">
        <div className="associationContainer">
          <header className="associationSectionHeader">
            <div>
              <span className="associationSectionTag">
                Calendário
              </span>

              <h2>Próximos eventos da associação</h2>
            </div>
          </header>

          {association.events?.length > 0 ? (
            <div className="associationEvents__grid">
              {association.events.map((event) => (
                <article
                  key={event.id ?? event.title}
                  className="associationEventCard"
                >
                  <CalendarDays size={24} />

                  <span>{event.displayDate}</span>

                  <h3>{event.title}</h3>

                  <p>{event.location}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="associationEmpty">
              <CalendarDays size={38} />

              <h3>Nenhum evento cadastrado</h3>

              <p>
                As próximas programações da associação serão divulgadas aqui.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="associationContact">
        <div className="associationContainer associationContact__card">
          <div>
            <span>Contato associacional</span>

            <h2>Fale com a Associação {association.shortName}</h2>

            <p>
              Entre em contato para saber mais sobre eventos, embaixadas e
              atuação regional.
            </p>
          </div>

          <div className="associationContact__links">
            {association.contacts?.instagram && (
              <a
                href={association.contacts.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <Camera size={18} />
                Instagram
              </a>
            )}

            {association.contacts?.email && (
              <a href={`mailto:${association.contacts.email}`}>
                <Mail size={18} />
                E-mail
              </a>
            )}

            {!association.contacts?.instagram &&
              !association.contacts?.email && (
                <span className="associationContact__soon">
                  Contatos disponíveis em breve
                </span>
              )}
          </div>
        </div>
      </section>
    </main>
  );
}