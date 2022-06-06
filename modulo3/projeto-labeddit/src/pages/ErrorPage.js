import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../routes/coordinator";

export default function ErrorPage(){
    const navigate = useNavigate();

    return (
        <header>
            <h1>Opa! Nada encontrado por aqui...</h1>
            <button onClick={()=> goToFeedPage(navigate)}>Voltar para Feed</button>
        </header>
    )

};
