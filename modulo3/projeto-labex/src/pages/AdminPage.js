import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import useRequestData from "../hooks/useRequestData";
import { deleteTrip } from "../requests/services";
import { goToHomePage } from "../routes/coordinator";

export default function AdminPage(){

    const navigate = useNavigate();

    const [tripsData, getTripsData] = useRequestData("trips", {});

    useEffect(()=> {
        if(!localStorage.getItem("token")){
            goToHomePage(navigate);
        };
    });

    const removeTrip = (tripId) => {
        if (window.confirm("Confirma a remoção desta viagem?")) {
            deleteTrip(tripId, getTripsData);
        };
    };

    const tripList = tripsData.trips ? tripsData.trips.map((trip)=>{
        return (
            <Card
                key={trip.id}
                trip={trip}
                removeTrip={removeTrip}
                />
        )
    }) : (<p>Preparando...</p>)
    
    return(
        <>
        <Header />
        <main>
            <section>
                <h2>Crie uma nova viagem!</h2>
            </section>
            <hr/>
            <section>
                <h2> Lista de Viagens </h2>
                    {tripList}
            </section>            
        </main>       
        
        </>
    )
}