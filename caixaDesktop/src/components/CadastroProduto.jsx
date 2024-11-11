import React, { useState } from "react";
import "./CadastroProduto.css";
import { adicionarProduto } from "../api/postProduto.js";

function CadastroProduto({ onNavigate }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [mensagem, setMensagem] = useState("");

  const cadastrarProduto = async () => {
    if (nome && descricao && preco) {
      try {
        const novoProduto = {
          nome,
          descricao,
          preco: parseFloat(preco)
        };
        await adicionarProduto(novoProduto);
        setMensagem("Produto cadastrado com sucesso!");
        setNome("");
        setDescricao("");
        setPreco("");
      } catch (error) {
        setMensagem("Erro ao cadastrar o produto.");
      }
    } else {
      setMensagem("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="cadastro-produto">
      <div className="conteudo-produto">
        <div className="cabecalho">
          <h1>Cadastro de Produto</h1>
          <nav>
            <button onClick={() => onNavigate("home")}>Voltar</button>
          </nav>
        </div>

        <div className="secao-inputs">
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite o nome do produto"
            />
          </label>
          <label>
            Descrição:
            <input
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Digite a descrição do produto"
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              min="0"
              step="0.01"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              placeholder="Digite o preço do produto"
            />
          </label>
          <button onClick={cadastrarProduto} className="botao-cadastrar">
            Cadastrar Produto
          </button>
        </div>

        {mensagem && (
          <p className={`mensagem ${mensagem.includes("sucesso") ? "sucesso" : "erro"}`}>
            {mensagem}
          </p>
        )}
      </div>
    </div>
  );
}

export default CadastroProduto;
