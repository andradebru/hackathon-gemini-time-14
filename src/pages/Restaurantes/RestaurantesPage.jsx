import { Container, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import RestauranteCard from "../../components/RestauranteCard";
import { getRestaurantes } from "../../services/restaurantes.service";
import { Routes, Route, useParams } from 'react-router-dom';


import "./style.css";

function RestaurantesPage() {
  const [nomeCategoria, setNomeCategoria] = useState([]);
  const [restaurantesBaratinho, setRestaurantesBaratinho] = useState([]);
  const [restaurantesNoPreco, setRestaurantesNoPreco] = useState([]);
  const [restaurantesCaro, setRestaurantesCaro] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();


  useEffect(() => {
    getRestaurantes(id).then((response) => {
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
        <div className="restaurante-card" key={restaurante.id} >
          <img className="imgCategory" src={restaurante.imagem} />
          <div className="restaurante-desc">
            <h4>{restaurante.nome}</h4>
            <p>{restaurante.distancia} km</p>
            <p className="restaurante-valor">★ {restaurante.nota}</p>
            <p>{restaurante.tempo_medio}  - {restaurante.valor_entrega}</p>
          </div>
        </div>
      ))}

      <div className="sub-header">
        <Typography variant="body1" color="primary">
          No Preço <span>(</span>$ $ $ <span>$ $)</span>
        </Typography>
      </div>
      {restaurantesNoPreco?.map(restaurante => (
        <div className="restaurante-card" key={restaurante.id} >
          <img className="imgCategory" src={restaurante.imagem} />
          <div className="restaurante-desc">
            <h4>{restaurante.nome}</h4>
            <p>{restaurante.distancia} km</p>
            <p className="restaurante-valor">★ {restaurante.nota}</p>
            <p>{restaurante.tempo_medio}  - {restaurante.valor_entrega} </p>
          </div>
        </div>
      ))}

      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Caro, mas vale a pena <span>(</span>$ $ $ $ $ <span>)</span>
        </Typography>
      </div>
      {restaurantesCaro?.map(restaurante => (
        <div className="restaurante-card" key={restaurante.id} >
          <img className="imgCategory" src={restaurante.imagem} />
          <div className="restaurante-desc">
            <h4>{restaurante.nome}</h4>
            <p>{restaurante.distancia} km</p>
            <p className="restaurante-valor">★ {restaurante.nota}</p>
            <p>{restaurante.tempo_medio}  - {restaurante.valor_entrega}</p>
          </div>
        </div>
      ))}

    </Container>
  )
}

export default RestaurantesPage;