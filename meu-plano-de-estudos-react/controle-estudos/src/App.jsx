import { useState } from "react";
import { useAtividades } from "./AtividadesContext.jsx";
import Accordion from "./components/Accordion.jsx";
import Pagination from "./components/Pagination.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import Tabs from "./components/Tabs.jsx";
import Dropdown from "./components/Dropdown.jsx";
import Toast from "./components/Toast.jsx";

const perguntas = [
  {
    titulo: "Como marcar uma atividade como concluída?",
    conteudo:
      "Clique no botão Concluir ao lado da atividade. O progresso será atualizado automaticamente.",
  },
  {
    titulo: "Como filtrar as atividades?",
    conteudo:
      "Abra o menu Categoria e escolha Dados, Programação ou Inglês. Para ver tudo novamente, escolha Todas.",
  },
  {
    titulo: "Os dados ficam salvos?",
    conteudo:
      "Não. Esta versão é uma demonstração simples e as alterações são reiniciadas quando a página é recarregada.",
  },
];
export default function App() {
  const { atividades, alternarAtividade, adicionarAtividade } = useAtividades();
  const [categoria, setCategoria] = useState("Todas");
  const [pagina, setPagina] = useState(1);
  const [mensagem, setMensagem] = useState("");
  const [novoTitulo, setNovoTitulo] = useState("");
  const [novaCategoria, setNovaCategoria] = useState("Dados");
  const concluidas = atividades.filter((item) => item.concluida).length;
  const filtradas = atividades.filter(
    (item) => categoria === "Todas" || item.categoria === categoria,
  );
  const porPagina = 4;
  const totalPaginas = Math.ceil(filtradas.length / porPagina);
  const visiveis = filtradas.slice(
    (pagina - 1) * porPagina,
    pagina * porPagina,
  );
  function alternar(id) {
    const atual = atividades.find((item) => item.id === id);
    alternarAtividade(id);
    setMensagem(
      atual.concluida
        ? "Atividade marcada como pendente."
        : "Atividade concluída com sucesso!",
    );
  }
  function adicionar(e) {
    e.preventDefault();
    const titulo = novoTitulo.trim();
    if (!titulo) return;
    adicionarAtividade(titulo, novaCategoria);
    setNovoTitulo("");
    setCategoria("Todas");
    setPagina(1);
    setMensagem("Nova atividade adicionada!");
  }
  return (
    <div className="layout">
      <header className="hero">
        <div className="container">
          <p className="eyebrow">ORGANIZAÇÃO PESSOAL</p>
          <h1>Meu Plano de Estudos</h1>
          <p>
            Organize suas atividades e acompanhe sua evolução de um jeito
            simples.
          </p>
        </div>
      </header>
      <main className="container main">
        <section className="summary card">
          <div>
            <p className="muted">Resumo geral</p>
            <h2>Seu progresso</h2>
            <p>
              {concluidas} de {atividades.length} atividades concluídas
            </p>
          </div>
          <ProgressBar />
        </section>
        <section className="card">
          <div className="section-heading">
            <div>
              <p className="muted">PLANEJAMENTO</p>
              <h2>Minhas atividades</h2>
            </div>
            <Dropdown
              opcoes={["Todas", "Dados", "Programação", "Inglês"]}
              selecionado={categoria}
              aoSelecionar={(opcao) => {
                setCategoria(opcao);
                setPagina(1);
              }}
            />
          </div>
          <ul className="task-list">
            {visiveis.map((item) => (
              <li key={item.id} className="task">
                <div>
                  <span className="category">{item.categoria}</span>
                  <p className={item.concluida ? "done" : ""}>{item.titulo}</p>
                </div>
                <button
                  className={item.concluida ? "secondary" : "primary"}
                  onClick={() => alternar(item.id)}
                >
                  {item.concluida ? "Desfazer" : "Concluir"}
                </button>
              </li>
            ))}
            {visiveis.length === 0 && (
              <li className="empty">Nenhuma atividade nesta categoria.</li>
            )}
          </ul>
          <Pagination
            pagina={pagina}
            total={totalPaginas}
            aoMudar={setPagina}
          />
        </section>
        <section className="card">
          <h2>Adicionar atividade</h2>
          <form className="add-form" onSubmit={adicionar}>
            <label>
              Nome da atividade
              <input
                value={novoTitulo}
                onChange={(e) => setNovoTitulo(e.target.value)}
                placeholder="Ex.: Estudar funções em Python"
                maxLength={80}
                required
              />
            </label>
            <label>
              Categoria
              <select
                value={novaCategoria}
                onChange={(e) => setNovaCategoria(e.target.value)}
              >
                <option>Dados</option>
                <option>Programação</option>
                <option>Inglês</option>
              </select>
            </label>
            <button className="primary" type="submit">
              Adicionar
            </button>
          </form>
        </section>
        <section className="card">
          <h2>Materiais de apoio</h2>
          <Tabs
            abas={[
              {
                titulo: "Dados",
                conteudo: (
                  <p>
                    Pratique SELECT, WHERE, JOIN, GROUP BY e modelagem de
                    tabelas relacionais.
                  </p>
                ),
              },
              {
                titulo: "Programação",
                conteudo: (
                  <p>
                    Revise funções, componentes React, APIs REST e exercícios de
                    lógica.
                  </p>
                ),
              },
              {
                titulo: "Inglês",
                conteudo: (
                  <p>
                    Leia textos curtos, revise palavras novas e pratique frases
                    do cotidiano.
                  </p>
                ),
              },
            ]}
          />
        </section>
        <section className="card">
          <h2>Dúvidas frequentes</h2>
          <Accordion itens={perguntas} />
        </section>
      </main>
      <footer>Projeto acadêmico • React.js</footer>
      <Toast mensagem={mensagem} aoFechar={() => setMensagem("")} />
    </div>
  );
}
