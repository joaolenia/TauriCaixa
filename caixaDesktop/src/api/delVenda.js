import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/vendas"; 

export const excluirVenda = async (codigo) => {
  try {
    const response = await axios.delete(`${API_URL}/${codigo}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Produto não encontrado");
  }
};