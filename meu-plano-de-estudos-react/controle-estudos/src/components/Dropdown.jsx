import { useEffect, useRef, useState } from "react";
export default function Dropdown({ opcoes, selecionado, aoSelecionar }) {
  const [aberto, setAberto] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const fechar = (e) => {
      if (!ref.current?.contains(e.target)) setAberto(false);
    };
    document.addEventListener("pointerdown", fechar);
    return () => document.removeEventListener("pointerdown", fechar);
  }, []);
  return (
    <div className="dropdown" ref={ref}>
      <button
        aria-expanded={aberto}
        aria-haspopup="listbox"
        onClick={() => setAberto(!aberto)}
      >
        Categoria: {selecionado} ▾
      </button>
      {aberto && (
        <div className="dropdown-options" role="listbox">
          {opcoes.map((opcao) => (
            <button
              key={opcao}
              role="option"
              aria-selected={selecionado === opcao}
              onClick={() => {
                aoSelecionar(opcao);
                setAberto(false);
              }}
            >
              {opcao}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
