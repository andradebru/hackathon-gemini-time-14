import { Container, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import RestauranteCard from "../../components/RestauranteCard";
import { getRestaurantes } from "../../services/restaurantes.service";


import "./style.css";

function RestaurantesPage() {
  const [nomeCategoria, setNomeCategoria] = useState([]);
  const [restaurantesBaratinho, setRestaurantesBaratinho] = useState([]);
  const [restaurantesNoPreco, setRestaurantesNoPreco] = useState([]);
  const [restaurantesCaro, setRestaurantesCaro] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRestaurantes(1).then((response) => {
      console.log(response)
      setNomeCategoria(response.categoria)
      setRestaurantesBaratinho(response.baratinho);
      setRestaurantesNoPreco(response.no_preco);
      setRestaurantesCaro(response.caro);
      setLoading(false);
    })
  }, []);

  return (
    <Container className="restaurantes">
      <Typography variant="h5" align="center" color="primary" className="title">
        RESTAURANTES: {nomeCategoria}
      </Typography>
      {loading && (
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
      )}

      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Baratinho <span>(</span>$ <span>$ $ $ $)</span>
        </Typography>
      </div>
      {restaurantesBaratinho?.map(restaurante => (
        <RestauranteCard key={restaurante.id} >
          {restaurante.nome}
          {restaurante.distancia}
          <img className="imgCategory" src={restaurante.imagem} />
          {restaurante.nota}
          {restaurante.tempo_medio}
          {restaurante.valor_entrega}
        </RestauranteCard>
      ))}

      <div className="sub-header">
        <Typography variant="body1" color="primary">
          No Preço <span>(</span>$ $ $ <span>$ $)</span>
        </Typography>
      </div>
      {restaurantesNoPreco?.map(restaurante => (
        <RestauranteCard key={restaurante.id} >
        {restaurante.nome}
        {restaurante.distancia}
        <img className="imgCategory" src={restaurante.imagem} />
        {restaurante.nota}
        {restaurante.tempo_medio}
        {restaurante.valor_entrega}
      </RestauranteCard>
      ))}

      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Caro, mas vale a pena <span>(</span>$ $ $ $ $ <span>)</span>
        </Typography>
      </div>
      {restaurantesCaro?.map(restaurante => (
        <RestauranteCard key={restaurante.id} >
        {restaurante.nome}
        {restaurante.distancia}
        <img className="imgCategory" src={restaurante.imagem} />
        {restaurante.nota}
        {restaurante.tempo_medio}
        {restaurante.valor_entrega}
      </RestauranteCard>
      ))}

    </Container>
  )
}

export default RestaurantesPage;