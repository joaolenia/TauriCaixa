import "./HomeScreen.css";
import logo from "../data/logo.png";

function HomeScreen({ onNavigate }) {
  return (
    
    <div className="home-supermercado">
      <div className="content-home">
          <h1>Supermercado Preço Bom</h1>
        <img src={logo} alt="Preço Bom Logo" className="logo" />
        <p>Versão 1.0.0</p>
        <button className="home-button" onClick={() => onNavigate("caixa")}>
          Caixa
        </button>
        <button
          className="home-button"
          onClick={() => onNavigate("verificador")}
        >
          Verificador de Preço
        </button>
        <button className="home-button" onClick={() => onNavigate("sobre")}>
          Sobre o Sistema
        </button>
        <button className="home-button" onClick={() => onNavigate("cadastro")}>
          Cadastrar produtos
        </button>
        <button className="home-button" onClick={() => onNavigate("listagem")}>
          Listar
        </button>
      </div>
      </div>
  
  );
}

export default HomeScreen;
