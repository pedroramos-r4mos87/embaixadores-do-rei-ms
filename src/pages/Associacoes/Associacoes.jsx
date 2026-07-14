import { ArrowRight, MapPin, Network, Search } from "lucide-react";
import { Link } from "react-router-dom";
import "./Associacoes.css";

const associations = [
  {
    id: 1,
    slug: "centro",
    name: "DAER - ACIBAMS",
    acronym: "Associação Centro de Igrejas Batistas do MS",
    city: "Campo Grande e região Centro do estado",
    embassies: "Embaixadas serão cadastradas em breve",
  },
  {
    id: 2,
    slug: "sul",
    name: "DAER - ASSIBAS",
    acronym: "Associação Sul de Igrejas Batistas do MS",
    city: "Dourados e região sul do estado",
    embassies: "Embaixadas serão cadastradas em breve",
  },
  {
    id: 3,
    slug: "pantanal",
    name: "DAER - ASSIBAP",
    acronym: "Associação Pantanal de Igrejas Batistas do MS",
    city: "Corumbá, Ladário e região pantaneira do estado",
    embassies: "Embaixadas serão cadastradas em breve",
  },
];

export default function Associacoes() {
  return (
    <div className="associationsPage">
      <section className="associationsHero">
        <div className="associationsContainer">
          <span className="associationsEyebrow">
            <Network size={18} />
            Organização regional
          </span>

          <h1>Associações dos Embaixadores do Rei</h1>

          <p>
            Conheça as regiões que conectam igrejas e embaixadas em todo Mato
            Grosso do Sul.
          </p>
        </div>
      </section>

      <section className="associationsContent">
        <div className="associationsContainer">
          <div className="associationsIntro">
            <div>
              <span>Associações estaduais</span>
              <h2>Encontre uma associação</h2>
            </div>

            <div className="associationsSearch">
              <Search size={19} />

              <input
                type="text"
                placeholder="Pesquisar por associação ou cidade"
                aria-label="Pesquisar associações"
              />
            </div>
          </div>

          <div className="associationsGrid">
            {associations.map((association) => (
              <article key={association.id} className="associationCard">
                <div className="associationCard__icon">
                  <Network size={25} />
                </div>

                <span className="associationCard__type">
                  {association.name}
                </span>

                <h2>{association.acronym}</h2>

                <div className="associationCard__location">
                  <MapPin size={17} />
                  {association.city}
                </div>

                <p>{association.embassies}</p>

                <Link
                  to={`/associacoes/${association.slug}`}
                  className="associationCard__link"
                >
                  Conhecer associação
                  <ArrowRight size={17} />
              </Link>
              </article>
            ))}
          </div>

          <div className="associationsNotice">
            <div>
              <strong>Cadastro em construção</strong>
              <p>
                Depois vamos substituir esses exemplos pelos nomes reais das
                associações, lideranças, cidades e embaixadas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}