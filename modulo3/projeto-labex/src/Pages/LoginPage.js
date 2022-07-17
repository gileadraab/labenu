import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { goToHomePage } from '../Routes/Coordinator'

export const LoginPage = () => {
  const [email, setEmail] = useState("")  
  const [password, setPassword] = useState("")


  const navigate = useNavigate()

  const goToAdminPage = () => {
    navigate('/admin/trips/list')
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token !== null) {
      goToAdminPage()
    }
  }, [])

  const login = () => {
    const body = {
      email: email,
      password: password
    }
    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gileadraab/login`, body)
    .then ((response) => {
      localStorage.setItem('token', response.data.token)
      goToAdminPage()
    })
    .catch ((err) => {
      alert("Não foi possivel efetuar seu login, verifique os dados inseridos", err.response)
    })
  }
  return (
    <div>
      <h2>Login</h2>
      <p>
        <input 
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={onChangeEmail}/>

      </p>
      <p>
        <input placeholder="Senha"
          type="password"
          value={password}
          onChange={onChangePassword}/>
      </p>
      <p><button onClick={() => goToHomePage(navigate)}>Voltar</button><button onClick={login}>Entrar</button></p>

    </div>
  )
}

