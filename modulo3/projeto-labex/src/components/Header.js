import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestLogin } from "../requests/services";
import { goToHomePage } from "../routes/coordinator";

export default function Header(props){

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInputValue = (event) => {
        switch(event.target.name){
            case "email":
                return setEmail(event.target.value);
            case "password":
                return setPassword(event.target.value);
            default:
                return;
;        };
    };

    const login = (event) => {
        event.preventDefault();

        requestLogin(email, password, navigate)
    }

    const logout = () => {
        localStorage.removeItem("token");

        goToHomePage(navigate);
    }


    const renderHeader = 
        localStorage.getItem("token") ?
        (
            <button onClick={logout}>Logout</button>
        ) : (
            <form onSubmit={login}>
                <label htmlFor={"email"}>E-mail:</label>
                <input
                    id={"email"}
                    name={"email"}
                    value={email}
                    onChange={handleInputValue}
                    />
                <br/>
                <label htmlFor={"password"}>Senha:</label>
                <input
                id={"password"}
                name={"password"}
                type={"password"}
                value={password}
                onChange={handleInputValue}
                />
                <br/>
                <button type={"submit"}>Login</button>
            </form>
        )
        // switch(props.currentPage){
        //     case "home-page":
        //         return(
        //             <button onClick={() => goToAdminPage(navigate)}>Login</button>
        //         );
        //     case "admin-page":
        //         return(
        //             <button onClick={() => goToHomePage(navigate)}>Logout</button>
        //         );
        //     default:
        //         return;
        // };
    return(
        <>
        <main>
            <header>
                <h1>LabeX</h1>
                {renderHeader}
            </header>          
        </main>       
        
        </>
    );
}