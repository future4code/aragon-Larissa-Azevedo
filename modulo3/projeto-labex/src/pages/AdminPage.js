import Header from "../components/Header";

export default function AdminPage(){
    return(
        <>
        <Header
        currentPage="admin-page" />
        <main>
            <section>
                <h2>Crie uma nova viagem!</h2>
            </section>

            <section>
                <h2> Lista de Viagens </h2>
            </section>            
        </main>       
        
        </>
    )
}