export default function Pagination({ pagina, total, aoMudar }) {
  if (total <= 1) return null;
  return (
    <nav className="pagination" aria-label="Paginação">
      <button disabled={pagina === 1} onClick={() => aoMudar(pagina - 1)}>
        Anterior
      </button>
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          aria-current={pagina === i + 1 ? "page" : undefined}
          className={pagina === i + 1 ? "selected" : ""}
          onClick={() => aoMudar(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button disabled={pagina === total} onClick={() => aoMudar(pagina + 1)}>
        Próxima
      </button>
    </nav>
  );
}
