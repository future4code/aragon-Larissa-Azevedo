import axios from "axios";
import { goToAdminPage } from "../routes/coordinator";

export const requestLogin = (email, password, navigate) => {
    const body = {
        email: email,
        password: password
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/lari-azevedo-aragon/login", body)
    .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Acesso Autorizado!")
        goToAdminPage(navigate);
    })
    .catch((error) => {
        alert("Acesso não autorizado.");
        console.log(error.response.data)
    });
}