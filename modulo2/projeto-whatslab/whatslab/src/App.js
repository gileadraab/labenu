import styled from 'styled-components'
import React from 'react'; 
import Messages from './components/messages';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: block;
  }

`

const MessageContainer = styled.div`
  background-color: #d6d6ed;
  display: flex;
  border: solid;
  width: 30vw;
  height: 98vh;
  align-items: center;
  justify-content: end;
  flex-direction: column;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 100%;
    border: none;

  }

`

const NewMessage = styled.div`
  display: flex;
  flex-direction: row;
  height: 3%;
  width: 100%;
  bottom: 100;
`

const InputName = styled.input`
  width: 20%;
`

const InputMessage = styled.input`
  width: 65%;
`

const SendMessage = styled.button`
  width: 15%;
`

class App extends React.Component{

  state={
    //Cria um array vazio onde será armazenada a nova mensagem
    messages:[

    ],

    //Cria dois elementos que receberão os inputs do usuário
    newUser: "",
    newMessage: ""
  };

  //Função que enviara os inputs do usuário para o array "messages"
  sendNewMessage = () => {
    //Atualiza os valores que serão enviados para o array "messages"
    const setMessage = {
      userName: this.state.newUser, 
      sentMessage: this.state.newMessage
    }
    //Cria um array a partir do array "messages" com os valores redefinidos
    const sentMessages = [...this.state.messages, setMessage]

    //Atualiza o array "messages" com o conteudo do array "sentMessages"
    this.setState({messages: sentMessages});
  };

  //Atualiza o valor de "newUser" ao alterar o valor no Input
  onChangeNewUser = (event) => {
    this.setState({newUser: event.target.value})
  };

  //Atualiza o valor de "newMessage" ao alterar o valor no Input
  onChangeNewMessage = (event) => {
    this.setState({newMessage: event.target.value})
  };

  render(){

    //renderiza o nome do usuário e a mensagem a serem exibidos na tela
    const allMessages = this.state.messages.map((message) => {
      return <Messages
        userName={message.userName}
        sentMessage={message.sentMessage}
        />
    })

    return (
      <MainContainer>
        <MessageContainer>

          {allMessages}
        
          <NewMessage>
            <InputName 
              //Define o valor inicial do input como o de "newUser"
              value = {this.state.newUser}
              //Atualiza o valor de "newUser" a cada tecla pressionada
              onChange={this.onChangeNewUser}
              placeholder={"Username"}
              />

            <InputMessage 
              //Define o valor inicial do input como o de "newMessage"
              value = {this.state.newMessage}
              //Atualiza o valor de "newMessage" a cada tecla pressionada
              onChange={this.onChangeNewMessage}
              placeholder={"Message"}
              />

            <SendMessage onClick={this.sendNewMessage}>Send</SendMessage>
          </NewMessage>

        </MessageContainer>
      </MainContainer>
    );
  }
}

export default App;
