export type Projeto = {
  id: string;
  nome: string;
  categoria: "Compacta" | "Térrea" | "Médio Padrão" | "Alto Padrão";
  area: number;
  quartos: number;
  banheiros: number;
  valor: string;
  imagem: string;
};

export const projetos: Projeto[] = [
  {
    id: "horizonte",
    nome: "Modelo Horizonte",
    categoria: "Compacta",
    area: 65,
    quartos: 2,
    banheiros: 1,
    valor: "A partir de R$ 185.000",
    imagem:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "magnolia",
    nome: "Modelo Magnólia",
    categoria: "Térrea",
    area: 95,
    quartos: 3,
    banheiros: 2,
    valor: "A partir de R$ 245.000",
    imagem:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "acacia",
    nome: "Modelo Acácia",
    categoria: "Médio Padrão",
    area: 128,
    quartos: 3,
    banheiros: 2,
    valor: "A partir de R$ 320.000",
    imagem:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "ipe",
    nome: "Modelo Ipê",
    categoria: "Médio Padrão",
    area: 145,
    quartos: 3,
    banheiros: 3,
    valor: "A partir de R$ 385.000",
    imagem:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "jequitiba",
    nome: "Modelo Jequitibá",
    categoria: "Alto Padrão",
    area: 220,
    quartos: 4,
    banheiros: 4,
    valor: "A partir de R$ 620.000",
    imagem:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "aroeira",
    nome: "Modelo Aroeira",
    categoria: "Alto Padrão",
    area: 280,
    quartos: 4,
    banheiros: 5,
    valor: "A partir de R$ 890.000",
    imagem:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80&auto=format&fit=crop",
  },
];

export const categorias = ["Todos", "Compacta", "Térrea", "Médio Padrão", "Alto Padrão"] as const;
