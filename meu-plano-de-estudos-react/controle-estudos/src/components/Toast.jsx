import { useEffect } from "react";
export default function Toast({ mensagem, aoFechar }) {
  useEffect(() => {
    if (!mensagem) return;
    const timer = setTimeout(aoFechar, 3000);
    return () => clearTimeout(timer);
  }, [mensagem, aoFechar]);
  return mensagem ? (
    <div className="toast" role="status">
      <span>{mensagem}</span>
      <button aria-label="Fechar notificação" onClick={aoFechar}>
        ×
      </button>
    </div>
  ) : null;
}
