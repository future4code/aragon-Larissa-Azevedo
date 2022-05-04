import React from 'react';
// import axios from 'axios';
import Login from './components/Login';
import Users from './components/Users';


export default class App extends React.Component{
  state = {
    currentPage: "signUp"
  };

  changePage = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({ currentPage: "users" });
    } else {
      this.setState({ currentPage: "signUp" });
    }
  };

  render(){
    return(
      <section>
        {this.setState.currentPage === "signUp" ? <Login /> : <Users/>}
        <button onClick={this.changePage}>Trocar a tela</button>        
      </section>
    );
  }

}