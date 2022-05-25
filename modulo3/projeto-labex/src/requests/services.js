import axios from "axios";
import { goToAdminPage } from "../routes/coordinator";

export const requestLogin = (email, password, navigate) => {
    const body = {
        email: email,
        password: password
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/lari-azevedo-aragon/login", body)
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

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lari-azevedo-aragon/trips/${tripId}`, header)
    .then(() => {
        alert("Viagem removida com sucesso!");
        getTripsData();
    })
    .catch((error) =>{
        alert(error.response.data)
    })
}