import React, { useState } from "react";
import "./VerificadorPreco.css";
import { buscarProduto as buscarProdutoAPI} from "../api/get.js"; 

function VerificadorPreco({ onNavigate }) {
  const [codigo, setCodigo] = useState("");
  const [produto, setProduto] = useState(null);
  const [erro, setErro] = useState(""); 
  
  const buscarProduto = async () => {
    try {
      const produtoApi = await buscarProdutoAPI(codigo); 
      setProduto(produtoApi); 
      setErro(""); 
    } catch (error) {
      setProduto(null); 
      setErro("Produto não encontrado."); 
    }
  };
  

  return (
    <div className="verificador-preco">
      <div className="conteudo-preco">
        <div className="cabecalho-preco">
          <h1>Verificador de Preço</h1>
          <nav>
            <button onClick={() => onNavigate("home")}>Voltar</button>
          </nav>
        </div>

        <div className="secao-entrada">
          <label>
            Código do Produto:
            <input
              type="number"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </label>
          <button onClick={buscarProduto} className="botao-buscar">
            Buscar
          </button>
        </div>

        {erro && <p className="erro">{erro}</p>} 

        {produto && (
          <div className="resultado">
            <h2>Informações do Produto:</h2>
            <p>Nome: {produto.nome}</p>
            <p>Descrição: {produto.descricao}</p>
            <p>Preço: R$ {produto.preco.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerificadorPreco;
