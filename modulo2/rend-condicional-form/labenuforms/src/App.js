import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import React, { Component } from 'react'
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center
`

export default class App extends Component {
  state = {
    etapa: 1,

  }

  renderizaEtapa = () => {
    let step = this.state.etapa
    switch (step){
      case 1:
        return <Etapa1/>
      case 2:
        return <Etapa2/>
      case 3:
        return <Etapa3/>
      case 4:
        return <Final/>
    }

  }

  nextStep = () => {
    const nextStep = this.state.etapa + 1
    this.setState({etapa: nextStep});
  }


  render() {


    return (
      <MainContainer>
        {this.renderizaEtapa()}

        {this.state.etapa == 4 || <button onClick={this.nextStep}>Próxima etapa</button>}
      </MainContainer>
    )
  }
}
