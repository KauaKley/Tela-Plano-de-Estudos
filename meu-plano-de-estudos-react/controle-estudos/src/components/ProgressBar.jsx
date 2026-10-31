import { useAtividades } from "../AtividadesContext.jsx";

export default function ProgressBar() {
  const { atividades } = useAtividades();
  const concluidas = atividades.filter((item) => item.concluida).length;
  const valor = atividades.length
    ? Math.round((concluidas / atividades.length) * 100)
    : 0;
  return (
    <div className="progress-area">
      <div className="progress-label">
        <span>Progresso das atividades</span>
        <strong>{valor}%</strong>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Atividades concluídas"
        aria-valuenow={valor}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-fill" style={{ width: `${valor}%` }} />
      </div>
    </div>
  );
}
