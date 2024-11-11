import React from "react";
import "./SobreScreen.css";
import logo from "../data/logo.png";

function SobreScreen({ onNavigate }) {
  return (
    <div className="sobre">
      <div className="content-sobre">

      <div className="cabecalho-sobre">
          <h1>Versão 1.0.0</h1>
          <nav>
            <button onClick={() => onNavigate("home")}>Voltar</button>
          </nav>
        </div>
          
          <h1>Supermercado Preço Bom</h1>
        <img src={logo} alt="Preço Bom Logo" className="logo" />
        <h3>Desenvolvedor</h3>
        <p>João Pedro Golenia</p>
        <h3>Contato</h3>
        <p>20230004017@estudantes.ifpr.edu.br</p>
      </div>
      </div>
  );
}

export default SobreScreen;
