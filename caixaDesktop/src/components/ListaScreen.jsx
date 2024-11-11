import React, { useState } from "react";
import { buscarTodasVendas } from "../api/getAllVendas.js";
import { buscarTodosProdutos } from "../api/getAllProdutos.js";
import { excluirProduto } from "../api/delProduto.js"; 
import { excluirVenda } from "../api/delVenda.js";  // Função de exclusão de venda
import "./ListaScreen.css";

function ListaScreen({ onNavigate }) {
  const [produtos, setProdutos] = useState([]);
  const [vendas, setVendas] = useState([]);
  const [tipoLista, setTipoLista] = useState("");
  const [confirmacaoExclusao, setConfirmacaoExclusao] = useState({ show: false, tipo: "", id: null });

  const listarProdutos = async () => {
    try {
      const produtosCadastrados = await buscarTodosProdutos();
      setProdutos(produtosCadastrados);
      setTipoLista("produtos");
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const listarVendas = async () => {
    try {
      const vendasCadastradas = await buscarTodasVendas();
      setVendas(vendasCadastradas);
      setTipoLista("vendas");
    } catch (error) {
      console.error("Erro ao buscar vendas:", error);
    }
  };

  const formatarData = (data) => {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const excluirItem = async () => {
    try {
      if (confirmacaoExclusao.tipo === "produto") {
        await excluirProduto(confirmacaoExclusao.id);
        setProdutos(produtos.filter((produto) => produto.id !== confirmacaoExclusao.id));
      } else if (confirmacaoExclusao.tipo === "venda") {
        await excluirVenda(confirmacaoExclusao.id);
        setVendas(vendas.filter((venda) => venda.id !== confirmacaoExclusao.id));
      }
      setConfirmacaoExclusao({ show: false, tipo: "", id: null });
    } catch (error) {
      console.error("Erro ao excluir item:", error);
    }
  };

  const cancelarExclusao = () => {
    setConfirmacaoExclusao({ show: false, tipo: "", id: null });
  };

  return (
    <div className="lista-screen">
      <div className="conteudo">
        <div className="cabecalho">
          <h1>Listagem</h1>
          <nav>
            <button onClick={() => onNavigate("home")}>Voltar</button>
          </nav>
        </div>

        <div className="botao">
          <button onClick={listarProdutos} className="botao-listagem">Listar Produtos</button>
          <button onClick={listarVendas} className="botao-listagem">Listar Vendas</button>
        </div>

        <div className="lista-container">
          {tipoLista === "produtos" && (
            <div className="lista">
              <h2>Produtos Cadastrados</h2>
              <ul>
                {produtos.map((produto) => (
                  <li key={produto.id} className="item">
                    <h3>Código: {produto.id}</h3>
                    <p>Nome: {produto.nome}</p>
                    <p>Descrição: {produto.descricao}</p>
                    <p>Preço: R$ {produto.preco.toFixed(2)}</p>
                    <button
                      className="botao-excluir"
                      onClick={() => setConfirmacaoExclusao({ show: true, tipo: "produto", id: produto.id })}
                    >
                      Excluir
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {tipoLista === "vendas" && (
            <div className="lista">
              <h2>Vendas Realizadas</h2>
              <ul>
                {vendas.map((venda) => (
                  <li key={venda.id} className="item">
                    <h3>Venda ID: {venda.id}</h3>
                    <p>Data: {formatarData(venda.data)}</p>
                    <p>Total: R$ {venda.total.toFixed(2)}</p>
                    <p>Pago: R$ {venda.pago.toFixed(2)}</p>
                    <p>Troco: R$ {venda.troco.toFixed(2)}</p>
                    <button
                      className="botao-excluir"
                      onClick={() => setConfirmacaoExclusao({ show: true, tipo: "venda", id: venda.id })}
                    >
                      Excluir
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {confirmacaoExclusao.show && (
          <div className="popup-confirmacao">
            <div className="popup-conteudo">
              <p>Tem certeza que deseja excluir?</p>
              <button onClick={excluirItem} className="botao-confirma">Confirmar</button>
              <button onClick={cancelarExclusao} className="botao-cancela">Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListaScreen;
