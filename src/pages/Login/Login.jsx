import {
  ArrowLeft,
  BellRing,
  CalendarCheck,
  FileText,
  LockKeyhole,
  ShieldCheck,
  UsersRound,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Login.css";

const futureResources = [
  {
    id: 1,
    icon: FileText,
    title: "Materiais exclusivos",
    description:
      "Documentos, planejamentos e recursos destinados aos conselheiros.",
  },
  {
    id: 2,
    icon: CalendarCheck,
    title: "Inscrições e eventos",
    description:
      "Acompanhamento de inscrições, etapas e programações estaduais.",
  },
  {
    id: 3,
    icon: UsersRound,
    title: "Gestão da embaixada",
    description:
      "Informações da embaixada, conselheiros e embaixadores vinculados.",
  },
  {
    id: 4,
    icon: BellRing,
    title: "Comunicados internos",
    description:
      "Avisos e orientações enviados pelo Departamento Estadual.",
  },
];

export default function Login() {
  return (
    <main className="counselorPage">
      <section className="counselorHero">
        <div className="counselorContainer counselorHero__layout">
          <div className="counselorHero__content">
            <Link to="/" className="counselorBackLink">
              <ArrowLeft size={17} />
              Voltar para o início
            </Link>

            <span className="counselorEyebrow">
              <ShieldCheck size={18} />
              Espaço exclusivo
            </span>

            <h1>Área do Conselheiro</h1>

            <p>
              Estamos preparando um ambiente exclusivo para apoiar o trabalho
              dos conselheiros e fortalecer as embaixadas de Mato Grosso do
              Sul.
            </p>

            <div className="counselorStatus">
              <div className="counselorStatus__icon">
                <Wrench size={23} />
              </div>

              <div>
                <strong>Área em desenvolvimento</strong>
                <span>
                  O acesso será disponibilizado em uma próxima atualização.
                </span>
              </div>
            </div>
          </div>

          <div className="counselorHero__visual" aria-hidden="true">
            <div className="counselorLock">
              <div className="counselorLock__glow" />

              <div className="counselorLock__circle">
                <LockKeyhole size={82} strokeWidth={1.7} />
              </div>

              <span>Ambiente seguro</span>
              <strong>Em breve</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="counselorResources">
        <div className="counselorContainer">
          <header className="counselorResources__header">
            <span>O que está sendo preparado</span>

            <h2>Recursos para facilitar o trabalho dos conselheiros</h2>

            <p>
              A área será integrada ao sistema estadual e terá acesso
              controlado para conselheiros vinculados às embaixadas.
            </p>
          </header>

          <div className="counselorResources__grid">
            {futureResources.map((resource) => {
              const Icon = resource.icon;

              return (
                <article key={resource.id} className="counselorResourceCard">
                  <div className="counselorResourceCard__icon">
                    <Icon size={27} />
                  </div>

                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>

                  <span>
                    <LockKeyhole size={14} />
                    Em desenvolvimento
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="counselorHelp">
        <div className="counselorContainer counselorHelp__card">
          <div>
            <span>Precisa de algum material?</span>

            <h2>A biblioteca pública continua disponível</h2>

            <p>
              Enquanto a área exclusiva não é lançada, consulte os documentos
              e recursos disponíveis na página de materiais.
            </p>
          </div>

          <Link to="/materiais" className="counselorHelp__button">
            Acessar materiais
            <FileText size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}