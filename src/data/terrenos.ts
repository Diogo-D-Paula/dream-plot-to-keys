export type Terreno = {
  id: string;
  cidade: string;
  bairro: string;
  metragem: number;
  preco: number;
  precoFormatado: string;
  destaque?: string;
};

export const terrenos: Terreno[] = [
  {
    id: "t1",
    cidade: "Goiânia",
    bairro: "Jardim Goiás",
    metragem: 360,
    preco: 285000,
    precoFormatado: "R$ 285.000",
    destaque: "Esquina, pronto para construir",
  },
  {
    id: "t2",
    cidade: "Goiânia",
    bairro: "Setor Bueno",
    metragem: 250,
    preco: 195000,
    precoFormatado: "R$ 195.000",
  },
  {
    id: "t3",
    cidade: "Aparecida de Goiânia",
    bairro: "Cidade Jardim",
    metragem: 300,
    preco: 145000,
    precoFormatado: "R$ 145.000",
    destaque: "Condomínio fechado",
  },
  {
    id: "t4",
    cidade: "Anápolis",
    bairro: "Jundiaí",
    metragem: 420,
    preco: 220000,
    precoFormatado: "R$ 220.000",
  },
  {
    id: "t5",
    cidade: "Goiânia",
    bairro: "Vila Brasília",
    metragem: 200,
    preco: 165000,
    precoFormatado: "R$ 165.000",
  },
  {
    id: "t6",
    cidade: "Senador Canedo",
    bairro: "Jardim das Oliveiras",
    metragem: 500,
    preco: 175000,
    precoFormatado: "R$ 175.000",
    destaque: "Lote amplo, escritura ok",
  },
];

export const cidades = ["Todas", "Goiânia", "Aparecida de Goiânia", "Anápolis", "Senador Canedo"] as const;
