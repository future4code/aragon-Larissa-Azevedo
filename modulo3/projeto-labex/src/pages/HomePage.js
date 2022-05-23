import Header from "../components/Header";

export default function HomePage(){
    return(
        <>
        <Header
        currentPage="home-page" />
        <main>
            <section>
                <h2>Inscreva-se em um nova viagem!</h2>
            </section>

            <section>
                <h2> Lista de Viagens </h2>
            </section>            
        </main>       
        
        </>
    );
}