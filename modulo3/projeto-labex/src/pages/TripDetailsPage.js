import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import useRequestData from "../hooks/useRequestData";
import { decideCandidate } from "../requests/services";
import { goToHomePage, goToAdminPage } from "../routes/coordinator";

export default function TripDetailsPage(){

    const navigate = useNavigate();

    const params = useParams();

    const [detailsData, getTripsDetail] = useRequestData(`trip/${params.tripId}`, {})

    useEffect(() => {
        if(!localStorage.getItem("token")) {
            goToHomePage(navigate);
        };
    }, []);


    const decide = (candidateId, decision) => {

        decideCandidate(params.tripId, candidateId, decision, getTripsDetail)
    }

    const candidatesList = detailsData.trip && detailsData.trip.candidates.map((candidate) => {
        return(
            <section key={candidate.id}> 
                <span>Nome: {candidate.name} - </span>
                <span>Profissão: {candidate.profession} - </span>
                <span>Idade: {candidate.age} - </span> 
                <span>País: {candidate.country} - </span>
                <span>Texto de Candidatura: {candidate.applicationText}</span>

                <button onClick={() => decide(candidate.id, true)}>Aprovar Candidatura</button>
                <button onClick={() => decide(candidate.id, false)}>Reprovar Candidatura</button>
            </section>
        )

    });

    const approvedList = detailsData.trip &&  detailsData.trip.approved.map((candidate)=>{
        return <li key ={candidate.id}>{candidate.name}</li>
    })


    return(
        <>

        <button onClick={() => goToAdminPage(navigate)}>Voltar</button>
        <h1>Viagem Selecionada: {detailsData.trip && detailsData.trip.name}</h1>
        <hr />
        <h2>Lista de Candidatos</h2>
            {candidatesList}
        <hr />
        <h2>Lista de Aprovados</h2>
            {approvedList}  
        </>
    )
    

}