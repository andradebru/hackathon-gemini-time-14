import RestauranteCard from ".";
import "./styles.css";

function RestauranteCard() {
    {restaurantesBaratinho?.map(restaurante => (
        
},

export default function RestauranteCard(){
    return (
        <div className="restaurante-card" key={restaurante.id}>
          <img className="imgCategory" src={restaurante.imagem} alt={restaurante.nome}/>
          <div className="restaurante-descricao">
            <h3>{restaurante.nome}</h3>
            <p>{restaurante.distancia}</p>
            <p>{restaurante.nota}</p>
            <p>{restaurante.tempo_medio}</p>
            <p>{restaurante.valor_entrega}</p>         
          </div>
        </div>
    );
};