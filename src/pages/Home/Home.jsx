import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Download,
  MapPin,
  Newspaper,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import logoEr from "../../assets/images/transparent-logo-er.png";
import "./Home.css";
import MsAssociationsMap from "../../components/MsAssociationsMap/MsAssociationsMap";
const news = [
  {
    id: 1,
    title: "Etapa estadual dos Embaixadores do Rei",
    description:
      "Confira a programação, as modalidades e todas as informações da próxima etapa.",
    date: "25 de julho de 2026",
    category: "Eventos",
  },
  {
    id: 2,
    title: "Novos materiais para conselheiros",
    description:
      "Conteúdos de apoio para fortalecer o trabalho das embaixadas locais.",
    date: "18 de julho de 2026",
    category: "Materiais",
  },
  {
    id: 3,
    title: "Embaixadas em movimento",
    description:
      "Veja as atividades que estão sendo realizadas em diferentes regiões do estado.",
    date: "10 de julho de 2026",
    category: "Notícias",
  },
];

const quickLinks = [
  {
    title: "Notícias",
    description: "Acompanhe tudo o que acontece no campo.",
    icon: Newspaper,
    path: "/noticias",
  },
  {
    title: "Eventos",
    description: "Confira datas, programações e inscrições.",
    icon: CalendarDays,
    path: "/eventos",
  },
  {
    title: "Materiais",
    description: "Acesse estudos, documentos e conteúdos.",
    icon: Download,
    path: "/materiais",
  },
  {
    title: "Sobre os ER",
    description: "Conheça nossa missão, história e valores.",
    icon: BookOpen,
    path: "/sobre",
  },
];


export default function Home() {
  return (
    <div className="home">
      <section className="homeHero">
        <div className="homeHero__decor homeHero__decor--one" />
        <div className="homeHero__decor homeHero__decor--two" />

        <div className="homeHero__content">
          <div className="homeHero__text">
            <span className="homeHero__eyebrow">
              <ShieldCheck size={18} />
              Departamento Estadual - DCERMS
            </span>

            <h1>
              Construindo Meninos Para Não Remendar Homens
            </h1>

            <p>
              O portal dos Embaixadores do Rei do DCERMS. Notícias,
              eventos, materiais e conteúdos para embaixadores, conselheiros e
              famílias.
            </p>

            <div className="homeHero__actions">
              <Link to="/eventos" className="homeButton homeButton--primary">
                Ver próximos eventos
                <ArrowRight size={18} />
              </Link>

              <Link to="/sobre" className="homeButton homeButton--secondary">
                Conheça os ER
              </Link>
            </div>

            <div className="homeHero__stats">
              <div>
                <strong>Missão</strong>
                <span>Desenvolver o caráter cristão dos meninos de tal maneira 
                  que se tornem crentes ativos e consagrados, possuídos de um espírito intensamente evangelístico e missionário</span>
              </div>

              <div>
                <strong>Propósito</strong>
                <span>Serviço, fé e liderança</span>
              </div>

              <div>
                <strong>Alcance</strong>
                <span>Estado do Mato Grosso do Sul</span>
              </div>
            </div>
          </div>

          <div className="homeHero__visual">
            <div className="homeHero__logoCircle">
              <img
                src={logoEr}
                alt="Logo dos Embaixadores do Rei"
              />
            </div>

            <div className="homeHero__floatingCard">
              <Users size={22} />
              <div>
                <strong>Uma geração em missão</strong>
                <span>Compromisso com Deus e com a igreja</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homeEvent">
        <div className="homeContainer">
          <div className="homeEvent__card">
            <div className="homeEvent__date">
              <span>25</span>
              <strong>JUL</strong>
            </div>

            <div className="homeEvent__content">
              <span className="homeSectionTag">Próximo evento</span>

              <h2>3° Etapa do GINCAER - DAER ACIBAMS</h2>

              <div className="homeEvent__details">
                <span>
                  <CalendarDays size={17} />
                  25 de julho de 2026
                </span>

                <span>
                  <MapPin size={17} />
                  Campo Grande, Mato Grosso do Sul, Poliesportivo Vila Nasser
                </span>
              </div>
            </div>

            <Link to="/eventos" className="homeEvent__link">
              Ver detalhes
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="homeQuick">
        <div className="homeContainer">
          <div className="homeSectionHeader">
            <div>
              <span className="homeSectionTag">Acesso rápido</span>
              <h2>Tudo o que você precisa em um só lugar</h2>
            </div>

            <p>
              Navegue pelas principais áreas do portal e encontre conteúdos
              importantes para sua embaixada.
            </p>
          </div>

          <div className="homeQuick__grid">
            {quickLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  className="homeQuick__card"
                >
                  <div className="homeQuick__icon">
                    <Icon size={25} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <span>
                    Acessar
                    <ArrowRight size={17} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="homeAssociations">
  <div className="homeContainer homeAssociations__content">
    <div className="homeAssociations__text">
      <span className="homeSectionTag homeAssociations__tag">
        Organização regional
      </span>

      <h2>Conectando os Embaixadores do Rei em todo o estado</h2>

      <p>
        As associações fortalecem o trabalho regional, aproximando igrejas,
        conselheiros e embaixadas em diferentes regiões de Mato Grosso do Sul.
      </p>

      <div className="homeAssociations__actions">
        <Link
          to="/associacoes"
          className="homeButton homeButton--primary"
        >
          Conhecer associações
          <ArrowRight size={18} />
        </Link>

        <Link
          to="/er-em-ms"
          className="homeAssociations__secondaryLink"
        >
          Entender a organização estadual
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>

    <MsAssociationsMap />
  </div>
</section>
      <section className="homeNews">
        <div className="homeContainer">
          <div className="homeSectionHeader homeSectionHeader--inline">
            <div>
              <span className="homeSectionTag">Atualizações</span>
              <h2>Notícias em destaque</h2>
            </div>

            <Link to="/noticias" className="homeTextLink">
              Ver todas as notícias
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="homeNews__grid">
            {news.map((item) => (
              <article key={item.id} className="homeNews__card">
                <div className="homeNews__image">
                  <span>{item.category}</span>
                </div>

                <div className="homeNews__content">
                  <span className="homeNews__date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <Link to="/noticias">
                    Ler notícia
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="homeCounselor">
        <div className="homeContainer">
          <div className="homeCounselor__card">
            <div>
              <span className="homeSectionTag homeSectionTag--light">
                Área do Conselheiro
              </span>

              <h2>Um espaço preparado para fortalecer sua embaixada</h2>

              <p>
                Em breve, conselheiros poderão acessar materiais, comunicados e
                recursos exclusivos para o trabalho local.
              </p>
            </div>

            <Link to="/login" className="homeButton homeButton--yellow">
              Acessar área do conselheiro
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}