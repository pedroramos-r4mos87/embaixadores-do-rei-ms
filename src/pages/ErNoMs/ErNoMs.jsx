import {
  ArrowRight,
  CalendarDays,
  Flag,
  MapPinned,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import logoEr from "../../assets/images/logo-er.png";
import "./ErNoMs.css";

const stateAreas = [
  {
    icon: Users,
    title: "Liderança estadual",
    description:
      "Conheça a equipe responsável pelo trabalho dos Embaixadores do Rei em Mato Grosso do Sul.",
  },
  {
    icon: MapPinned,
    title: "Associações",
    description:
      "Veja as associações regionais, suas lideranças e as embaixadas que fazem parte de cada região.",
  },
  {
    icon: CalendarDays,
    title: "Calendário estadual",
    description:
      "Acompanhe as etapas, congressos, treinamentos e demais atividades realizadas no estado.",
  },
];

export default function ErEmMs() {
  return (
    <div className="statePage">
      <section className="stateHero">
        <div className="stateContainer stateHero__content">
          <div className="stateHero__text">
            <span className="stateEyebrow">
              <ShieldCheck size={18} />
              Organização estadual
            </span>

            <h1>Embaixadores do Rei em Mato Grosso do Sul</h1>

            <p>
              Um trabalho que conecta igrejas, conselheiros, associações e
              embaixadas na missão de formar meninos para servir a Cristo.
            </p>

            <div className="stateHero__actions">
              <Link to="/associacoes" className="stateButton stateButton--yellow">
                Conhecer associações
                <ArrowRight size={18} />
              </Link>

              <Link to="/eventos" className="stateButton stateButton--outline">
                Ver calendário
              </Link>
            </div>
          </div>

          <div className="stateHero__visual">
            <div className="stateHero__logo">
              <img src={logoEr} alt="Embaixadores do Rei" />
            </div>

            <div className="stateHero__badge">
              <Flag size={22} />
              <div>
                <strong>Mato Grosso do Sul</strong>
                <span>"Uma vez ER, sempre ER!"</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stateIntro">
        <div className="stateContainer stateIntro__content">
          <div>
            <span className="stateSectionTag">Nossa presença</span>
            <h2>Uma organização que alcança todo o estado</h2>
          </div>

          <p>
            O Departamento Estadual atua apoiando associações, igrejas e
            conselheiros, promovendo integração, formação, eventos e recursos
            para o desenvolvimento das embaixadas locais.
          </p>
        </div>
      </section>

      <section className="stateAreas">
        <div className="stateContainer">
          <div className="stateAreas__grid">
            {stateAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article key={area.title} className="stateAreas__card">
                  <div className="stateAreas__icon">
                    <Icon size={25} />
                  </div>

                  <h2>{area.title}</h2>
                  <p>{area.description}</p>

                  <span>
                    Em breve
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="stateStructure">
        <div className="stateContainer">
          <div className="stateStructure__header">
            <span className="stateSectionTag">Estrutura estadual</span>
            <h2>Como o trabalho se organiza</h2>
            <p>
              Essa seção poderá ser preenchida depois com os nomes reais,
              cargos, regiões e informações oficiais.
            </p>
          </div>

          <div className="stateStructure__grid">
            <div className="stateStructure__item">
              <span>01</span>
              <h3>Departamento Estadual</h3>
              <p>Coordenação e direcionamento do trabalho em Mato Grosso do Sul.</p>
            </div>

            <div className="stateStructure__item">
              <span>02</span>
              <h3>Associações</h3>
              <p>Organização regional das igrejas e embaixadas.</p>
            </div>

            <div className="stateStructure__item">
              <span>03</span>
              <h3>Embaixadas locais</h3>
              <p>O trabalho desenvolvido diretamente nas igrejas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}