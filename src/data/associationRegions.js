export const associationRegions = {
  centro: {
  id: "centro",
  slug: "centro",

  name: "Associação Centro",
  shortName: "Centro",

  fullName:
    "Departamento Associacional dos Embaixadores do Rei da Associação Centro de Igrejas Batistas de Mato Grosso do Sul",

  acronym: "DAER-ACIBAMS",

  active: true,
  featured: true,

  embassies: 18,

  description:
    "O DAER-ACIBAMS reúne e acompanha as embaixadas da região Centro de Mato Grosso do Sul, promovendo integração, formação bíblica, atividades esportivas e fortalecimento do trabalho associacional.",

  history: [
    "O Departamento Associacional dos Embaixadores do Rei da Associação Centro de Igrejas Batistas de Mato Grosso do Sul foi organizado em 2015.",
    "Um dos marcos de sua história foi a realização do primeiro Acampamento Associacional dos Embaixadores do Rei, no Acampamento Batista de Piraputanga.",
    "O DAER-ACIBAMS engloba as embaixadas da região Centro e promove ações que aproximam embaixadores, conselheiros e igrejas.",
    "Entre suas principais atividades está o GINCAER — Gincana Associacional dos Embaixadores do Rei —, uma competição que estimula os encontros entre as embaixadas por meio de provas bíblicas e esportivas.",
  ],

  cities: [
    "Campo Grande",
    "Corguinho",
    "Ribas do Rio Pardo",
    "Sidrolândia",
    "Terenos",
  ],

  churches: [],

  leadership: [
    {
      id: 1,
      name: "Leandro Almeida",
      role: "Coordenador Associacional",
      church: "Terceira Igreja Batista de Campo Grande",
      image: "",
    },
    {
      id: 2,
      name: "Pedro Ramos",
      role: "Coordenador de Eventos",
      church: "Segunda Igreja Batista de Campo Grande",
      image: "",
    },
    {
      id: 3,
      name: "João Segatto",
      role: "Coordenador de Formação",
      church: "Igreja Batista Filadélfia",
      image: "",
    },
    {
      id: 4,
      name: "João Brites",
      role: "Tesoureiro",
      church: "Segunda Igreja Batista de Campo Grande",
      image: "",
    },
    {
      id: 5,
      name: "Daniel Amaral",
      role: "Coordenador de Comunicação",
      church: "Igreja Batista Filadélfia",
      image: "",
    },
    {
      id: 6,
      name: "Henrique Ramos",
      role: "Representante do DAER",
      church: "Igreja Batista Jardim Pacaembu",
      image: "",
    },
  ],

  contacts: {
    instagram: "https://www.instagram.com/daer.acibams",
    instagramHandle: "@daer.acibams",
    whatsapp: "",
    email: "",
  },

  events: [
    {
      id: 1,
      title: "3ª Etapa do GINCAER",
      date: "2026-07-25",
      displayDate: "25 de julho de 2026",
      location: "A confirmar",
      category: "Associacional",
      description:
        "Etapa da Gincana Associacional dos Embaixadores do Rei, com competições bíblicas, esportivas e momentos de integração entre as embaixadas.",
    },
  ],
},

  pantanal: {
    id: "pantanal",
    name: "Associação Pantanal",
    active: true,
    embassies: 6,
    cities: [
      "Corumbá",
      "Ladário",
    ],
  },

  sul: {
    id: "sul",
    name: "Associação Sul",
    active: true,
    embassies: 25,
    cities: [
      "Amambai",
      "Anaurilândia",
      "Angélica",
      "Antônio João",
      "Aral Moreira",
      "Bataguassu",
      "Batayporã",
      "Bela Vista",
      "Caarapó",
      "Caracol",
      "Coronel Sapucaia",
      "Deodápolis",
      "Douradina",
      "Dourados",
      "Eldorado",
      "Fátima do Sul",
      "Glória de Dourados",
      "Iguatemi",
      "Itaporã",
      "Itaquiraí",
      "Ivinhema",
      "Japorã",
      "Jateí",
      "Juti",
      "Laguna Carapã",
      "Maracaju",
      "Mundo Novo",
      "Naviraí",
      "Nova Alvorada do Sul",
      "Nova Andradina",
      "Novo Horizonte do Sul",
      "Paranhos",
      "Ponta Porã",
      "Rio Brilhante",
      "Sete Quedas",
      "Tacuru",
      "Taquarussu",
      "Vicentina",
    ],
  },

  leste: {
    id: "leste",
    name: "Associação Leste",
    active: false,
    embassies: 0,
    cities: [
      "Água Clara",
      "Aparecida do Taboado",
      "Brasilândia",
      "Cassilândia",
      "Chapadão do Sul",
      "Costa Rica",
      "Inocência",
      "Paranaíba",
      "Santa Rita do Pardo",
      "Selvíria",
      "Três Lagoas",
    ],
  },

  norte: {
    id: "norte",
    name: "Associação Norte",
    active: false,
    embassies: 0,
    cities: [
      "Alcinópolis",
      "Bandeirantes",
      "Camapuã",
      "Coxim",
      "Pedro Gomes",
      "Rio Negro",
      "Rio Verde de Mato Grosso",
      "São Gabriel do Oeste",
      "Sonora",
    ],
  },

  oeste: {
    id: "oeste",
    name: "Associação Oeste",
    active: false,
    embassies: 0,
    cities: [
      "Anastácio",
      "Aquidauana",
      "Bodoquena",
      "Bonito",
      "Dois Irmãos do Buriti",
      "Guia Lopes da Laguna",
      "Jardim",
      "Miranda",
      "Nioaque",
      "Porto Murtinho",
    ],
  },
};

export const activeAssociations = Object.values(associationRegions).filter(
  (association) => association.active,
);

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function findAssociationByCity(cityName) {
  const normalizedCity = normalizeText(cityName);

  return Object.values(associationRegions).find((association) =>
    association.cities.some(
      (city) => normalizeText(city) === normalizedCity,
    ),
  );
}