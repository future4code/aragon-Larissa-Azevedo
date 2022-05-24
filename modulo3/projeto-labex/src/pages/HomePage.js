import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToAdminPage } from "../routes/coordinator";

export default function HomePage(){
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("token")) {
            goToAdminPage(navigate)
        }
    });



    return(
        <>
        <Header
        currentPage="home-page" />
        <main>
            <section>
                <h2>Inscreva-se em um nova viagem!</h2>
            </section>

            <section>
                <h2> Lista de Viagens </h2>
            </section>            
        </main>       
        
        </>
    );
}