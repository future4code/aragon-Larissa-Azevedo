export default function Card(props) {
    const {id, name, description, planet, durationInDays, date} = props.trip;

    const token = localStorage.getItem("token");

    return(
        <>
            <p>Viagem: {name}</p>
            <p>Experiência: {description}</p>
            <p>Planeta: {planet}</p>
            <p>Duração: {durationInDays} dias</p>
            <p>Data: {date}</p>

            {token && (
                <>
                    <button>Exibir detalhes</button>
                    <button onClick={() => props.removeTrip(id)}>Excluir viagem</button>
                </>

            )}
            <hr />
        </>
    )
}