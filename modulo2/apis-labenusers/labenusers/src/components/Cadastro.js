import React, { Component } from 'react'
import axios from "axios"

export default class Cadastro extends Component {
    state = {
        name: "",
        email: "",
        id: ""
    }

    addNewUser = () => {
        const newUser = {
            name: this.state.name,
            email: this.state.email
        }
        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", newUser, {
                headers: {
                    Authorization: "gilead-raab-alves"
                }
            })
            .then((result) => {
                alert("Usuário cadastrado com sucesso!")
                this.setState({name:"", email:""})
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }


    newUserName = (event) => {
        this.setState({ name: event.target.value })
    }

    newUserEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    render() {
        return (
            <div>
                <div><button onClick={this.props.goToLista}>Trocar de tela</button></div>

                <input placeholder="Nome" value={this.state.name} onChange={this.newUserName} />
                <input placeholder="E-mail" value={this.state.email} onChange={this.newUserEmail} />
                <button onClick={this.addNewUser}>CRIAR USUÁRIO</button>
            </div>
        )
    }
}