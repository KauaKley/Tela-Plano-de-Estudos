import { useState } from "react";
export default function Accordion({ itens }) {
  const [aberto, setAberto] = useState(null);
  return (
    <div className="accordion">
      {itens.map((item, i) => (
        <div className="accordion-item" key={i}>
          <button
            aria-expanded={aberto === i}
            onClick={() => setAberto(aberto === i ? null : i)}
          >
            {item.titulo}
            <span>{aberto === i ? "−" : "+"}</span>
          </button>
          <div className={"accordion-content " + (aberto === i ? "open" : "")}>
            <p>{item.conteudo}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
