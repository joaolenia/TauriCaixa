import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/vendas"; 

export const adicionarVenda = async (venda) => {
  try {
    const response = await axios.post(API_URL, venda);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao cadastrar o produto");
  }
};
