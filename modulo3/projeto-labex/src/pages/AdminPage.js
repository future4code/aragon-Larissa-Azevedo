import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import { planets } from "../components/Planets";
import useForm from "../hooks/useForm";
import useRequestData from "../hooks/useRequestData";
import { createTrip, deleteTrip } from "../requests/services";
import { goToHomePage } from "../routes/coordinator";

export default function AdminPage(){

    const navigate = useNavigate();

    const [tripsData, getTripsData] = useRequestData("trips", {});

    const {form, onChange, clear} = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    useEffect(()=> {
        if(!localStorage.getItem("token")){
            goToHomePage(navigate);
        };
    });

    const onClickCreate = (event) => {
        event.preventDefault();

        createTrip(form, clear, getTripsData);
    };

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

                <form onSubmit={onClickCreate}>
                    <label htmlFor={"name"}>Título da Viagem: </label>
                    <input
                        id={"name"}
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        required
                    />

                    <label htmlFor={"planet"}>Planeta: </label>
                    <select
                        id={"planet"}
                        planet={"planet"}
                        defaultValue={""}
                        onChange={onChange}
                        required
                    >
                        <option value={""} disabled>Escolha o Planeta!</option>

                        {planets.map((planet) => {
                            return <option value={planet} key ={planet}>{planet}</option>                        
                        })};
                    </select>

                    <label htmlFor={"date"}> Data de lançamento: </label>
                        <input
                            id={"date"}
                            type={"date"}
                            name={"date"}
                            value={form.date}
                            onChange={onChange}
                            required
                        />
                    
                    <label htmlFor={"description"}> Descrição: </label>
                        <input
                            id={"description"}
                            name={"description"}
                            value={form.description}
                            onChange={onChange}
                            required 
                        />
                    
                    <label htmlFor={"duration"}> Duração em dias terrestres: </label>
                        <input
                            id={"duration"}
                            type={"number"}
                            name={"durationInDays"}
                            value={form.durationInDays}
                            onChange={onChange}
                            required
                        />
                        <button type={"submit"}>Criar Viagem</button>
                </form>
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