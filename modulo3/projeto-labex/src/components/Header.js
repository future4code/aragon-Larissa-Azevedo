import { useNavigate } from "react-router-dom";
import { goToAdminPage, goToHomePage } from "../routes/coordinator";

export default function Header(props){

    const navigate = useNavigate();

    const renderHeader = () => {
        switch(props.currentPage){
            case "home-page":
                return(
                    <button onClick={() => goToAdminPage(navigate)}>Login</button>
                );
            case "admin-page":
                return(
                    <button onClick={() => goToHomePage(navigate)}>Logout</button>
                );
            default:
                return;
        };
    };
    return(
        <>
        <main>
            <header>
                <h1>LabeX</h1>
                {renderHeader()}
            </header>          
        </main>       
        
        </>
    );
}