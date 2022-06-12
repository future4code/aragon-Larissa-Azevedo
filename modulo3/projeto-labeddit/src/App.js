
import { createGlobalStyle } from "styled-components";
import GlobalState from "./global/GlobalState";
import Router from "./routes/Router";

const GlobalStyle = createGlobalStyle`
body{
  font-family: Roboto, Mono-space ;
  margin: 0;
  padding: 0;
  text-align: center;

}
`

export default function App() {
  return (
    <main>
    <GlobalStyle/>
    <GlobalState>
      <Router />
    </GlobalState>
    </main>
  );
}
