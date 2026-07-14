export const associationRegions = {
  centro: {
    id: "centro",
    name: "Associação Centro",
    active: true,
    embassies: 18,
    cities: [
      "Campo Grande",
      "Sidrolândia",
      "Corguinho",
      "Ribas do Rio Pardo",
      "Terenos",
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