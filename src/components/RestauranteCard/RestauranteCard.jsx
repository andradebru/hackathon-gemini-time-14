import RestauranteCard from ".";
import "./style.css";

export default RestauranteCard = (props) => {
    return (
        <div className="restaurante-card" key={props.id}>
          <img className="imgCategory" src={props.imagem} alt={props.nome}/>
          <div className="restaurante-descricao">
            <h3>{props.nome}</h3>
            <p>{props.distancia}</p>
            <p>{props.nota}</p>
            <p>{props.tempo_medio}</p>
            <p>{props.valor_entrega}</p>         
          </div>
        </div>
    );
};