import Api from "./api";

export async function getDetalhes(id) {
    try {
        const detalhes = await Api.get(`/detalhes/${id}.json`);
        return detalhes.data;
    } catch (err) {
        throw err;
    }
};
