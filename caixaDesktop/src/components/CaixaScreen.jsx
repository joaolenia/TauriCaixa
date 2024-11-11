import React, { useState } from "react";
import "./CaixaScreen.css";
import { buscarProduto as buscarProdutoAPI } from "../api/get.js";
import { adicionarVenda } from "../api/postVenda.js";

function CaixaScreen({ onNavigate }) {
  const [codigo, setCodigo] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [produtos, setProdutos] = useState([]);
  const [valorPago, setValorPago] = useState("");
  const [troco, setTroco] = useState(0);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");

  const adicionarProduto = async () => {
    try {
      const produtoApi = await buscarProdutoAPI(codigo); 
      const totalItem = produtoApi.preco * quantidade;
      const novoProduto = { ...produtoApi, quantidade, total: totalItem };
      setProdutos([...produtos, novoProduto]);
      setCodigo("");
      setErro(""); 
      setQuantidade(1);
    } catch (error) {
      setErro("Produto não encontrado."); 
    }
  };

  const calcularTotal = () => {
    return produtos.reduce((acc, item) => acc + item.total, 0).toFixed(2);
  };

  const calcularTroco = () => {
    const total = calcularTotal();
    setTroco((valorPago - total).toFixed(2));
  };

  const removerProduto = (index) => {
    const novosProdutos = produtos.filter((_, i) => i !== index);
    setProdutos(novosProdutos);
  };

  const finalizarVenda = async () => {
    const total = parseFloat(calcularTotal());
    const pago = parseFloat(valorPago);

    if (pago < total) {
      setMensagem("O valor pago é insuficiente.");
      return;
    }

    try {
      await adicionarVenda({ total, pago });
      setMensagem("Venda finalizada com sucesso!");
      setProdutos([]);
      setValorPago("");
      setTroco(0);
    } catch (error) {
      setMensagem("Erro ao finalizar a venda.");
    }
  };

  return (
    <div className="caixa-supermercado">
      <div className="conteudo-caixa">
        <div className="cabecalho">
          <h1>Caixa de Supermercado</h1>
          <nav>
            <button onClick={() => onNavigate("home")}>Voltar</button>
          </nav>
        </div>

        <div className="secao-inputs">
          <label>
            Código:
            <input
              type="number"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </label>
          <label>
            Quantidade:
            <input
              type="number"
              min="1"
              value={quantidade}
              onChange={(e) => setQuantidade(Number(e.target.value))}
            />
          </label>
          <button onClick={adicionarProduto} className="botao-adicionar">
            Adicionar à lista
          </button>
        </div>

        {erro && <p className="erro">{erro}</p>}

        <div className="lista-produtos">
          <h2>Lista de produtos:</h2>
          <div className="container-lista">
            <ul>
              {produtos.map((produto, index) => (
                <li key={index}>
                  {produto.descricao} - Qtd: {produto.quantidade} - Unit: R$ {produto.preco.toFixed(2)} - Total: R$ {produto.total.toFixed(2)}
                  <button onClick={() => removerProduto(index)} className="botao-remover">
                    Excluir
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="secao-total">
          <p>Total: R$ {calcularTotal()}</p>
          <label>
            Valor pago:
            <input
              type="number"
              value={valorPago}
              onChange={(e) => setValorPago(e.target.value)}
              onBlur={calcularTroco}
            />
          </label>
          <p>Troco: R$ {troco}</p>
        </div>

        <button onClick={finalizarVenda} className="botao-finalizar">
          Finalizar Venda
        </button>

        {mensagem && (
          <p className={`mensagem ${mensagem.includes("sucesso") ? "sucesso" : "erro"}`}>
            {mensagem}
          </p>
        )}

      </div>
    </div>
  );
}

export default CaixaScreen;
