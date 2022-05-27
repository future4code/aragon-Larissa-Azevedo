import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import { countries } from "../constants/countries";
import useForm from "../hooks/useForm";
import useRequestData from "../hooks/useRequestData";
import { sendApplication } from "../requests/services";
import { goToAdminPage } from "../routes/coordinator";

export default function HomePage(){
    const [tripId, setTripId] = useState("");

    const navigate = useNavigate();

    const [tripsData] = useRequestData("trips", {});

    const {form, onChange, clear} = useForm({name: "", age: "", applicationText: "", profession: "", country: ""})

    useEffect(() => {
        if(localStorage.getItem("token")) {
            goToAdminPage(navigate)
        }
    });

    const onChangeTrip = (event) => {
        setTripId(event.target.value);
    }

    const onClickSend = (event) => {
        event.preventDefault();

        sendApplication(form, tripId, clear)
    };

    const tripOptions = tripsData.trips && tripsData.trips.map((trip) => {
        return <option key={trip.id} value={trip.id}>{trip.name}</option>
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
                <form onSubmit={onClickSend}>
                    <label htmlFor="trip">Viagem: </label>
                    <select
                        id={"trip"}
                        defaultValue={""}
                        onChange={onChangeTrip}
                        required
                        >

                        <option
                            value={""}
                            disabled
                        > Escolha uma Viagem:
                        </option>

                        {tripOptions}                      
                        </select>

                    <label htmlFor={"name"}>Nome: </label>
                    <input
                        id={"name"}
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        required
                    />

                    <label htmlFor="age">Idade: </label>
                    <input
                        id={"age"}
                        name={"age"}
                        type={"number"}
                        value={form.age}
                        onChange={onChange}
                        required
                    />

                    <label htmlFor="application-text">Texto de Candidatura: </label>
                    <input
                        id={"application-text"}
                        name={"applicationText"}
                        value={form.applicationText}
                        onChange={onChange}
                        required
                    />
                    <br/>

                    <label htmlFor={"profession"}>Profissão: </label>
                    <input
                        id={"profession"}
                        name={"profession"}
                        type={"text"}
                        value={form.profession}
                        onChange={onChange}
                        required
                    />

                    <label htmlFor={"country"}>País: </label>
                    <select
                        id={"country"}
                        name={"country"}
                        value={form.country}
                        onChange={onChange}
                        required
                    >
                        <option
                            value={""}
                            disabled                             
                        > Escolha um País </option>

                        {countries.map((country)=>{
                            return <option key={country} value={country}> {country} </option>
                        })}
                    </select>

                    <button type={"submit"}>Enviar Candidatura</button> 
                </form>
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