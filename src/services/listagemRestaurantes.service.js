import Api from "./api";

export const getListagemRestaurantes = async (id) => {
  try {
    const listagemPorPreco = await Api.get(`/restaurantes/${id}.json`);
    return listagemPorPreco;
  } catch (err) {
    throw err;
  }
};