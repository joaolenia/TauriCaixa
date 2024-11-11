import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/produtos"; 

export const adicionarProduto = async (produto) => {
  try {
    const response = await axios.post(API_URL, produto);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao cadastrar o produto");
  }
};
