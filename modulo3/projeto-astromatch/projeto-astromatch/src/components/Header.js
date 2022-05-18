export default function Header(props){
    return(
        <header>
            <h1>★ AstroMatch ★</h1>

            {props.page === "profile" ? 
            <button onClick={props.goToMatchPage}>Ver Matches</button> :
            <button onClick={props.goToProfilePage}>Voltar para Perfis</button>
            }
        </header>
    );
};