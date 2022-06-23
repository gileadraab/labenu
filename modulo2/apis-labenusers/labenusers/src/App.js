import axios from "axios";
import React, { Component } from 'react'
import Cadastro from "./components/Cadastro";
import Lista from "./components/Lista";
import Detalhes from "./components/Detalhes";

export default class App extends Component {
  state={
    screen: "cadastro"
  }

  switchScreen = () =>{
    switch (this.state.screen){
      case "cadastro":
        return <Cadastro goToLista={this.changeTolista}/>
      case "lista":
        return <Lista goToCadastro={this.changeToCadastro} goToDetalhes={this.changeToDetalhes}/>
      case "detalhes":
        return <Detalhes 
          goToLista={this.changeTolista} 
          goToCadastro={this.changeToCadastro}/>
      default:
        return <div>Not found</div>
    }
  }
  
  changeToCadastro = () => {
    this.setState({screen: "cadastro"})
  }

  changeTolista = () => {
    this.setState({screen: "lista"})
  }

  changeToDetalhes = () => {
    this.setState({screen: "detalhes"})
  }

  render() {
    return (
      <div>
        {this.switchScreen()}
      </div>
    )
  }
}
