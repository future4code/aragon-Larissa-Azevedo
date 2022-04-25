import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

const AppContainer = styled.div`
  h1{color: orange};

  font-family: sans-serif;
  text-align: center;

  button{border: 1px solid black;
    border-radius: 30px;
    width: 200px;
    padding: 15px 30px;
    margin: 5px auto;}
    
  button:hover{color: orange; font-weight:bold};
`;

class App extends React.Component {
  state = {
    etapa: 1
  };

  onClickProximaEtapa = (novaEtapa) => {
    this.setState({
            etapa: novaEtapa
        });
    
};

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 clicandoProximaEtapa={this.onClickProximaEtapa} />;
      case 2:
        return <Etapa2 clicandoProximaEtapa={this.onClickProximaEtapa} />;
      case 3:
        return <Etapa3 clicandoProximaEtapa={this.onClickProximaEtapa} />;
      case 4:
        return <Final />;
      default:
        return <Etapa1/>;
    }
  };

  render() {
    return (    
    <AppContainer>
      <h1>LabenuForms</h1>
    {this.renderizaEtapa()}
    </AppContainer>
    
    );
  }
}

export default App;
