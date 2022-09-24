import Api from "./api";

export const getListagemRestaurantes = async (id) => {
  try {
    const response = await Api.get(`/restaurantes/${id}.json`);
    return response;
  } catch (err) {
    throw err;
  }
};