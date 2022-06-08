import React from 'react';
import raab from './img/raab.jpg';
import iconEmail from './img/iconEmail.png'
import iconAdress from './img/iconAdress.png'
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import {EstilosGerais, EstilosApp, Container, Titulo, } from "./styled"


function App() {
  return (
    <EstilosGerais>
    <EstilosApp>
      <Container>
        <Titulo>Dados pessoais</Titulo>
        <CardGrande 
          imagem={raab} 
          nome="Gilead Raab" 
          descricao="Olá, eu sou o Gilead Raab. Um amante da tecnologia e estudante de programação aprendendo CSS, HTML, Javascrip e React"
        />

        <CardPequeno
          imagem={iconEmail}
          email="email: gileadraab@gmail.com"
        />

        <CardPequeno
          imagem={iconAdress} 
          adress="Endereço: Rua Gilead"
        />

        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/60/60781.png" 
          texto="Ver mais"
        />
      </Container>

      <Container>
        <Titulo>Experiências profissionais</Titulo>
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/3749/3749784.png" 
          nome="Labenu" 
          descricao="Apanhando para o React" 
        />
        
        <CardGrande 
          imagem="https://cdn-icons.flaticon.com/png/512/3052/premium/3052444.png?token=exp=1654642439~hmac=37898ca0eb16f67b55074158819cd295" 
          nome="Prefeitura" 
          descricao="Fazendo planilha e carimbando cópia" 
        />
      </Container>

      <div>

      </div>

      <Container>
        <Titulo>Minhas redes sociais</Titulo>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </Container>
    </EstilosApp>
    </EstilosGerais>
  );
}

export default App;
