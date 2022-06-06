import axios from "axios";
import { goToFeedPage } from "../routes/coordinator";

export const requestLogin = (form, clear, navigate) => {
    const body = {
        email: form.email,
        password: form.password
    };

    axios.post("https://labeddit.herokuapp.com/users/login", body)
    .then((response)=>{
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userEmail", form.email);
        alert("Login realizado com sucesso :)")
        goToFeedPage(navigate)
    })
    .catch((error)=>{
        alert("Dados inválidos! Tente novamente!")
        clear();
    });
};