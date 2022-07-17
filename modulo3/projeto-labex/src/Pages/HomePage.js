import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLogin, goToTrips } from '../Routes/Coordinator'

export const HomePage = () => {
  const navigate = useNavigate()


  return (
    <div>
      <p>LabeX</p>
      <button onClick={()=> goToTrips(navigate)}>Ver Viagens</button>
      <button onClick={()=> goToLogin(navigate)}>Área de Admin</button>


    </div>
  )
}

