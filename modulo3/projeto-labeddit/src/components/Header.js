import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

export default function Header(props){
    const navigate = useNavigate();
    
    const logout = () => {
        if(window.confirm("Tem certeza de que deseja se deslogar?")) {
            localStorage.removeItem("token")
            localStorage.removeItem("userEmail")
            goToLoginPage(navigate)
            alert("Deslogado com sucesso!")
        };
    };

    return (
        <header>
            <h1>LabEddit</h1>
            {props.isProtected && (
                <section>
                    <h3>Boas vindas, {localStorage.getItem("userEmail")}!</h3>
                    <button onClick={logout} >Logout</button>
                </section>
            )}
        </header>
    );

};
