import axios from "axios";
import { goToAdminPage } from "../routes/coordinator";

export const requestLogin = (email, password, navigate) => {
    const body = {
        email: email,
        password: password
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/larissa-aragon/login", body)
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert("Acesso Autorizado!")
        goToAdminPage(navigate);
    })
    .catch((error) => {
        alert("Acesso não autorizado.");
        console.log(error.response.data)
    });
};


export const deleteTrip = (tripId, getTripsData) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    };

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/larissa-aragon/trips/${tripId}`, header)
    .then(() => {
        alert("Viagem removida com sucesso!");
        getTripsData();
    })
    .catch((error) =>{
        alert(error.response.data)
    })
}

export const createTrip = (body, clear, getTripsData) => {
    const header = {
        headers:{
            auth: localStorage.getItem("token")
        }
    };

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/larissa-aragon/trips`, body, header)
    .then(() => {
        alert("Viagem criada com sucesso!");
        clear();
        getTripsData();
    })
    .catch((error) => {
        alert(error.message)
    });  
}

export const sendApplication = (body, tripId, clear ) =>{
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/larissa-aragon/trips/${tripId}/apply`, body)
    .then(()=>{
        alert("Candidatura enviada com sucesso!");
        clear();
    })
    .catch((error) => alert(error.response.message));
}

export const decideCandidate = (tripId, candidateId, decision, getTripDetail) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    };

    const body = {
        approve: decision
    };

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/larissa-aragon/trips/${tripId}/candidates/${candidateId}/decide`,
    body, header
    )
    .then(() => {
        decision ?
        alert("Candidatura aprovada! Boa viagem!") :
        alert("Planeta Terra chamando! Candidatura reprovada.")
    })
    .catch((error) => {
        alert(error.message)
    });
}