import Api from "./api";

export const getListagemRestaurantes = async () => {
  try {
    const response = await Api.get(`/restaurantes/{id}.json`);
    return response;
  } catch (err) {
    throw err;
  }
};