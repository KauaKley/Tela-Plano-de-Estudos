import React, { createContext, useContext, useState } from "react";

const AtividadesContext = createContext(null);

const atividadesIniciais = [
  {
    id: 1,
    titulo: "Revisar consultas SQL",
    categoria: "Dados",
    concluida: true,
  },
  {
    id: 2,
    titulo: "Praticar JOIN e GROUP BY",
    categoria: "Dados",
    concluida: false,
  },
  {
    id: 3,
    titulo: "Estudar componentes React",
    categoria: "Programação",
    concluida: false,
  },
  {
    id: 4,
    titulo: "Revisar APIs REST",
    categoria: "Programação",
    concluida: true,
  },
  {
    id: 5,
    titulo: "Praticar vocabulário em inglês",
    categoria: "Inglês",
    concluida: false,
  },
  {
    id: 6,
    titulo: "Ler um texto curto em inglês",
    categoria: "Inglês",
    concluida: false,
  },
  {
    id: 7,
    titulo: "Resolver exercícios de Python",
    categoria: "Programação",
    concluida: false,
  },
  {
    id: 8,
    titulo: "Estudar modelagem de dados",
    categoria: "Dados",
    concluida: false,
  },
];

export function AtividadesProvider({ children }) {
  const [atividades, setAtividades] = useState(atividadesIniciais);

  function alternarAtividade(id) {
    setAtividades((anteriores) =>
      anteriores.map((item) =>
        item.id === id ? { ...item, concluida: !item.concluida } : item,
      ),
    );
  }

  function adicionarAtividade(titulo, categoria) {
    setAtividades((anteriores) => [
      ...anteriores,
      { id: Date.now(), titulo, categoria, concluida: false },
    ]);
  }

  return (
    <AtividadesContext.Provider
      value={{ atividades, alternarAtividade, adicionarAtividade }}
    >
      {children}
    </AtividadesContext.Provider>
  );
}

export function useAtividades() {
  return useContext(AtividadesContext);
}
