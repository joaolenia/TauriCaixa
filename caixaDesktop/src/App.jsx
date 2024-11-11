import { useState } from "react";
import "./App.css";
import "./index.css";
import HomeScreen from "./components/HomeScreen";
import CaixaScreen from "./components/CaixaScreen.JSX";
import VerificadorPreco from "./components/VerificadorPreco";
import SobreScreen from "./components/SobreScreen";
import CadastroProduto from "./components/CadastroProduto.jsx";
import ListaScreen from "./components/ListaScreen";

function App() {
  const [telaAtual, setTelaAtual] = useState("home");

  const renderizarTela = () => {
    switch (telaAtual) {
      case "home":
        return <HomeScreen onNavigate={setTelaAtual} />;
      case "caixa":
        return <CaixaScreen onNavigate={setTelaAtual} />;
      case "verificador":
        return <VerificadorPreco onNavigate={setTelaAtual} />;
      case "sobre":
        return <SobreScreen onNavigate={setTelaAtual} />;
      case "cadastro":
          return <CadastroProduto onNavigate={setTelaAtual} />;
      case "listagem":
          return <ListaScreen onNavigate={setTelaAtual} />;
      default:
        return <HomeScreen onNavigate={setTelaAtual} />;
    }
  };

  return <div>{renderizarTela()}</div>;
}
export default App;
