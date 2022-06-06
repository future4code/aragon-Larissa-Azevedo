import { useNavigate } from "react-router-dom";
import { goToTripDetailsPage } from "../routes/coordinator";

export default function Card(props) {
    
    const navigate = useNavigate();
    const {id, name, description, planet, durationInDays, date} = props.trip;

    const token = localStorage.getItem("token");

    return(
        <>
            <p>Viagem: {name}</p>
            <p>Experiência: {description}</p>
            <p>Planeta: {planet}</p>
            <p>Duração: {durationInDays} dias terrestres</p>
            <p>Decolagem no dia {date}</p>

            {token && (
                <>
                    <button onClick={()=> goToTripDetailsPage (navigate, id) }>Exibir detalhes</button>
                    <button onClick={() => props.removeTrip(id)}>Excluir viagem</button>
                </>

            )}
            <hr />
        </>
    )
}