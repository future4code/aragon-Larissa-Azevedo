
import { createGlobalStyle } from "styled-components";
import GlobalState from "./global/GlobalState";
import Router from "./routes/Router";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  text-align: center;
  color: #A67360;
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
