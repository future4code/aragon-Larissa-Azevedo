import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import useRequestData from "../hooks/useRequestData";
import { goToAdminPage } from "../routes/coordinator";

export default function HomePage(){
    const navigate = useNavigate();

    const [tripsData] = useRequestData("trips", {});

    useEffect(() => {
        if(localStorage.getItem("token")) {
            goToAdminPage(navigate)
        }
    });


    const tripList = tripsData.trips ? tripsData.trips.map((trip) =>{
        return(
            <Card
            key = {trip.id}
            trip= {trip}
            />
        );
    }) : (<p>Carregando as turbinas...</p>)

    return(
        <>
        <Header
        currentPage="home-page" />
        <main>
            <section>
                <h2>Inscreva-se em um nova viagem!</h2>
            </section>
            <hr />
            <section>
                <h2> Lista de Viagens </h2>
                        {tripList}
            </section>         
        </main>       
        
        </>
    );
}