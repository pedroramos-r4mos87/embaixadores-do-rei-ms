import {
  ArrowDown,
  BookOpen,
  TentTree,
  Cross,
  Crown,
  Flag,
  HeartHandshake,
  Medal,
  Megaphone,
  Mountain,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import logoEr from "../../assets/images/transparent-logo-er.png";
import williamAlvinHatton from "../../assets/images/alvin-hatton-foto.jpeg";
import "./Sobre.css";

const pillars = [
  {
    title: "Missões",
    description:
      "Conhecer a obra missionária e participar ativamente da expansão do Reino de Deus.",
    icon: Megaphone,
  },
  {
    title: "Mordomia",
    description:
      "Aprender a administrar a vida, os dons e os recursos como presentes de Deus.",
    icon: HeartHandshake,
  },
  {
    title: "Evangelização",
    description:
      "Compartilhar o evangelho e representar Jesus Cristo onde estiver.",
    icon: Cross,
  },
  {
    title: "Comunhão",
    description:
      "Desenvolver amizade, disciplina e cooperação por meio de atividades saudáveis.",
    icon: Medal,
  },
  {
    title: "Acampamentos",
    description:
      "Viver experiências de comunhão, aprendizado, aventura e crescimento espiritual.",
    icon: TentTree,
  },
];

const timeline = [
  {
    year: "1883",
    title: "As primeiras sementes",
    description:
      "Um grupo de meninos nos Estados Unidos se reunia para estudar missões, orar por missionários e contribuir com a obra missionária.",
  },
  {
    year: "1908",
    title: "Nasce a organização",
    description:
      "A organização Royal Ambassadors foi oficialmente criada para atender meninos e incentivá-los à participação missionária.",
  },
  {
    year: "1948",
    title: "Chegada ao Brasil",
    description:
      "William Alvin Hatton iniciou o trabalho dos Embaixadores do Rei em território brasileiro.",
  },
  {
    year: "1950",
    title: "Departamento de ER",
    description:
      "Foi criado o Departamento de Embaixadores do Rei, fortalecendo a organização nacional.",
  },
  {
    year: "1951",
    title: "Literatura e acampamentos",
    description:
      "Foi lançada a revista O Embaixador e começaram os primeiros acampamentos no Sítio do Sossego.",
  },
  {
    year: "1970",
    title: "Hino oficial",
    description:
      "Firmando Propósitos foi oficializado como o hino dos Embaixadores do Rei.",
  },
];

const ideals = [
  {
    number: "01",
    title: "Estudo da Bíblia",
    description:
      "Assim como o corpo precisa de alimento, nossa fé precisa da Palavra de Deus. Estudar a Bíblia nos fortalece, orienta nossas decisões e nos ajuda a conhecer melhor o nosso Rei.",
  },
  {
    number: "02",
    title: "Missões",
    description:
      "Um Embaixador do Rei é também um missionário. Somos representantes de Cristo na terra e recebemos dele a missão de ir, anunciar o evangelho e fazer discípulos.",
  },
  {
    number: "03",
    title: "Oração",
    description:
      "A oração é o momento de falar com Deus, abrir o coração, agradecer e apresentar nossas necessidades. Por isso, todo Embaixador do Rei deve desenvolver uma vida de oração sincera.",
  },
  {
    number: "04",
    title: "Serviço Real",
    description:
      "Serviço Real significa servir ao próximo. É compartilhar aquilo que recebemos de Deus e contribuir, com amor e disposição, para transformar a vida de outras pessoas.",
  },
  {
    number: "05",
    title: "Mordomia",
    description:
      "Ser mordomo de Deus significa servi-lo com tudo o que somos e temos. Em todos os lugares e momentos, usamos nosso tempo, dons, recursos e atitudes para honrar ao Senhor.",
  },
];

export default function Sobre() {
  return (
    <div className="aboutPage">
      <section className="aboutHero">
        <div className="aboutHero__shape aboutHero__shape--one" />
        <div className="aboutHero__shape aboutHero__shape--two" />

        <div className="aboutContainer aboutHero__content">
          <div className="aboutHero__text">
            <span className="aboutEyebrow">
              <ShieldCheck size={18} />
              Conheça os Embaixadores do Rei
            </span>

            <h1>Uma formação para a vida, a igreja e o Reino de Deus.</h1>

            <p>
              Os Embaixadores do Rei são uma organização batista dedicada ao
              desenvolvimento físico, moral e espiritual de meninos, formando
              cristãos ativos, missionários e comprometidos com Jesus Cristo.
            </p>

            <a href="#o-que-somos" className="aboutHero__button">
              Conheça nossa história
              <ArrowDown size={18} />
            </a>
          </div>

          <div className="aboutHero__visual">
            <div className="aboutHero__logo">
              <img src={logoEr} alt="Logo dos Embaixadores do Rei" />
            </div>

            <div className="aboutHero__quote">
              <Flag size={22} />

              <div>
                <strong>Somos Embaixadores por Cristo</strong>
                <span>2 Coríntios 5:20</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="aboutNavigation" aria-label="Navegação desta página">
        <div className="aboutContainer aboutNavigation__content">
          <a href="#o-que-somos">O que somos</a>
          <a href="#objetivo">Objetivo</a>
          <a href="#significado">Nosso nome</a>
          <a href="#tema-divisa">Tema e divisa</a>
          <a href="#cinco-ideais">5 Ideais</a>
          <a href="#historia">História</a>
          <a href="#pioneiro">O pioneiro</a>
        </div>
      </nav>

      <section id="o-que-somos" className="aboutIntroduction">
        <div className="aboutContainer">
          <div className="aboutSectionHeader">
            <div>
              <span className="aboutSectionTag">O que somos</span>
              <h2>Uma organização missionária feita para meninos</h2>
            </div>

            <p>
              O programa dos Embaixadores do Rei reúne formação bíblica,
              missões, serviço, convivência e atividades que contribuem para o
              crescimento integral de seus membros.
            </p>
          </div>

          <div className="aboutPillars">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article key={pillar.title} className="aboutPillarCard">
                  <div className="aboutPillarCard__icon">
                    <Icon size={25} />
                  </div>

                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="objetivo" className="aboutObjective">
        <div className="aboutContainer aboutObjective__content">
          <div className="aboutObjective__visual">
            <div className="aboutObjective__circle">
              <Target size={76} />
            </div>

            <div className="aboutObjective__miniCard">
              <Users size={21} />

              <div>
                <strong>Caráter cristão</strong>
                <span>Fé que se transforma em vida</span>
              </div>
            </div>
          </div>

          <div className="aboutObjective__text">
            <span className="aboutSectionTag">Nosso objetivo</span>

            <h2>Formar cristãos ativos, consagrados e missionários</h2>

            <p>
              O objetivo dos Embaixadores do Rei é desenvolver o caráter
              cristão dos meninos, levando-os a viver uma fé ativa e
              comprometida com a evangelização e com missões.
            </p>

            <div className="aboutObjective__items">
              <div>
                <BookOpen size={21} />
                <span>Conhecimento bíblico e missionário</span>
              </div>

              <div>
                <Medal size={21} />
                <span>Sistema de postos e crescimento pessoal</span>
              </div>

              <div>
                <HeartHandshake size={21} />
                <span>Serviço Real, reuniões e atividades práticas</span>
              </div>

              <div>
                <Mountain size={21} />
                <span>Acampamentos, excursões e comunhão</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="significado" className="aboutMeaning">
        <div className="aboutContainer aboutMeaning__content">
          <div>
            <span className="aboutSectionTag aboutSectionTag--yellow">
              Por que esse nome?
            </span>

            <h2>Representamos o Rei Jesus onde estivermos</h2>

            <p>
              Um embaixador representa seu governo em outra terra. Da mesma
              forma, o Embaixador do Rei representa Jesus Cristo no mundo,
              zelando pelos interesses do Reino e demonstrando por sua vida o
              que significa ser cristão.
            </p>
          </div>

          <blockquote>
            “Um verdadeiro Embaixador do Rei zelará pelos interesses do seu Rei
            Jesus aqui na terra.”
          </blockquote>
        </div>
      </section>

      <section id="tema-divisa" className="aboutTheme">
        <div className="aboutContainer">
          <div className="aboutTheme__header">
            <span className="aboutSectionTag">Nossa identidade bíblica</span>
            <h2>Tema e divisa</h2>
          </div>

          <div className="aboutTheme__grid">
            <article className="aboutTheme__card aboutTheme__card--theme">
              <span>Tema</span>

              <h3>“Somos Embaixadores por Cristo”</h3>

              <Flag size={36} />
            </article>

            <article className="aboutTheme__card aboutTheme__card--verse">
              <span>Divisa</span>

              <blockquote>
                “De sorte que somos Embaixadores por Cristo, como se Deus por
                nós vos exortasse. Rogamos-vos, pois, por Cristo que vos
                reconcilieis com Deus.”
              </blockquote>

              <strong>2 Coríntios 5:20</strong>
            </article>
          </div>
        </div>
      </section>

     <section id="cinco-ideais" className="aboutIdeals">
  <div className="aboutContainer">
    <div className="aboutIdeals__header">
      <div>
        <span className="aboutSectionTag aboutSectionTag--yellow">
          Identidade e compromisso
        </span>

        <h2>Os 5 Ideais dos Embaixadores do Rei</h2>

        <p>
          Cinco princípios que orientam a formação, a conduta e o compromisso
          de cada Embaixador do Rei com Cristo, com a igreja e com sua missão.
        </p>
      </div>

      <div className="aboutIdeals__crown">
        <Crown size={76} strokeWidth={1.7} />
        <span>5 Ideais</span>
      </div>
    </div>

    <div className="aboutIdeals__grid">
      {ideals.map((ideal) => (
        <article key={ideal.number} className="aboutIdealCard">
          <div className="aboutIdealCard__top">
            <span>{ideal.number}</span>
            <Crown size={24} />
          </div>

          <h3>{ideal.title}</h3>
          <p>{ideal.description}</p>
        </article>
      ))}
    </div>
  </div>
</section>

      <section id="historia" className="aboutHistory">
        <div className="aboutContainer">
          <div className="aboutHistory__header">
            <span className="aboutSectionTag">Nossa trajetória</span>
            <h2>Uma história construída por gerações</h2>

            <p>
              Das primeiras reuniões missionárias nos Estados Unidos até a
              consolidação da organização no Brasil.
            </p>
          </div>

          <div className="aboutTimeline">
            {timeline.map((item) => (
              <article key={item.year} className="aboutTimeline__item">
                <div className="aboutTimeline__marker">
                  <span>{item.year}</span>
                </div>

                <div className="aboutTimeline__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pioneiro" className="aboutPioneer">
        <div className="aboutContainer aboutPioneer__content">
          <div className="aboutPioneer__visual">
            <div className="aboutPioneer__image">
              <img
                src={williamAlvinHatton}
                alt="William Alvin Hatton, pioneiro dos Embaixadores do Rei no Brasil"
              />

              <div className="aboutPioneer__imageCaption">
                <strong>William Alvin Hatton</strong>
                <span>Pioneiro dos Embaixadores do Rei no Brasil</span>
              </div>
            </div>
          </div>

            <div className="aboutPioneer__text">
              <span className="aboutSectionTag">O pioneiro no Brasil</span>

              <h2>William Alvin Hatton</h2>

              <p>
                William Alvin Hatton conheceu os Embaixadores do Rei ainda
                menino, foi chamado ao ministério e veio ao Brasil como
                missionário em 1948.
              </p>

              <p>
                Seu trabalho foi decisivo para organizar embaixadas, produzir
                materiais, treinar líderes e estruturar os Embaixadores do Rei no
                país.
              </p>

              <div className="aboutPioneer__highlight">
                <strong>Um legado de serviço</strong>
                <span>
                  Uma vida dedicada à formação de meninos, líderes e missionários.
                </span>
              </div>
            </div>
          </div>
      </section>

      <section className="aboutIdentity">
        <div className="aboutContainer">
          <div className="aboutIdentity__header">
            <span className="aboutSectionTag">Identidade ER</span>
            <h2>Símbolos que comunicam nossa missão</h2>
          </div>

          <div className="aboutIdentity__grid">
            <article>
              <ShieldCheck size={28} />
              <h3>Insígnia</h3>
              <p>
                Um símbolo que identifica os Embaixadores do Rei e sua missão.
              </p>
            </article>

            <article>
              <Flag size={28} />
              <h3>Ideais</h3>
              <p>
                Princípios que orientam o crescimento espiritual e o serviço.
              </p>
            </article>

            <article>
              <Medal size={28} />
              <h3>Postos</h3>
              <p>
                Um caminho de aprendizado bíblico, missionário e pessoal.
              </p>
            </article>

            <article>
              <Megaphone size={28} />
              <h3>Hino oficial</h3>
              <p>
                Firmando Propósitos expressa a identidade e os compromissos ER.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}