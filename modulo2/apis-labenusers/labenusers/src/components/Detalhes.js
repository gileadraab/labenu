import React, { Component } from 'react'
import axios from "axios"

export default class Detalhes extends Component {
  state={
  }



  render() {
      return (
          <div>
              <div><button onClick={this.props.goToCadastro}>Trocar de tela</button></div>
              <div><button onClick={this.props.goToLista}>Voltar para a lista de usuários</button></div>
          </div>
      )
  }
}