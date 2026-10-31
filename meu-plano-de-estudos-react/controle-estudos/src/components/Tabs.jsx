import { useState } from "react";
export default function Tabs({ abas }) {
  const [ativa, setAtiva] = useState(0);
  return (
    <section>
      <div className="tabs" role="tablist" aria-label="Conteúdo de estudo">
        {abas.map((aba, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={ativa === i}
            onClick={() => setAtiva(i)}
            className={ativa === i ? "active" : ""}
          >
            {aba.titulo}
          </button>
        ))}
      </div>
      <div className="tab-panel" role="tabpanel">
        {abas[ativa].conteudo}
      </div>
    </section>
  );
}
