import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/vendas"; 

export const buscarTodasVendas = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao cadastrar o produto");
  }
};