import React, { Component } from 'react'
import axios from "axios"
import Detalhes from './Detalhes'

export default class Lista extends Component {
  state={
    allUsers:[]
  }

  componentDidMount(){
    this.getAllUsers()
  }

  getAllUsers = () =>{
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
        headers:{
          Authorization: "gilead-raab-alves"
        }
      })
      .then((result)=>{
        this.setState({allUsers: result.data})
      })
      .catch(()=>{
        alert("Ocorreu um erro")
      })
  }

  deleteUser = (id) =>{
    axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
        headers:{
          Authorization: "gilead-raab-alves"          
        }
      })
      .then((result)=>{
        alert("Usuário deletado com sucesso")
        this.getAllUsers()
      })
      .catch((error)=>{
        console.log(error)
        alert(error.response.data)
      })
  }

  confirmDeletion = (id) =>{
    if (window.confirm("Tem certeza que deseja deletar este usuário?")){
      this.deleteUser(id)
    }else{
      this.getAllUsers()
    }

  }

  render() {
    const listAllUsers = this.state.allUsers.map((user)=>{
      return (<li key={user.id}><span onClick={this.props.goToDetalhes}>{user.name}</span><span onClick={()=> this.confirmDeletion(user.id)}> X</span></li>)
    })

    return (
      <div>
        <button onClick={this.props.goToCadastro}>Trocar de tela</button>
        <ul>{listAllUsers}</ul>

      </div>

    )
  }
}
