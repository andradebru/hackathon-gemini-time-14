import Api from "./api";

export function getListagemRestaurantes() {
  try {
    const response = Api.get(`/restaurantes/.json`);
    return response;
  } catch (err) {
    throw err;
  }
};