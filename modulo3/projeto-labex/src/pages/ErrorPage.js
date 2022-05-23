import {  useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";

export default function ErrorPage(){

const navigate = useNavigate();

    return(
        <>
            <section>
                <h1> Ainda não estamos no espaço mas você chegou na Fronteira Final...</h1>
                <h3>... e não há nada por aqui.</h3>
            </section>  

        <button onClick={()=> goToHomePage(navigate)}>Voltar para Home</button>

        </>
    );
};