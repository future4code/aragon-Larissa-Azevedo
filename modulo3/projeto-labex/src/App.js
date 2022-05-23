import Router from "./routes/Router";
import styled from "styled-components"

const Tela = styled.div`
font-family: roboto;
text-align: center;
`


export default function App() {
  return (
    <section>
      <Tela>
      <Router />
      </Tela>
    </section>

  );
}

