import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()

  const goToTrips = () => {
    navigate("/trips/list")
  }

  const goToLogin = () => {
    navigate("/login")
  }


  return (
    <div>
      <p>LabeX</p>
      <button onClick={goToTrips}>Ver Viagens</button>
      <button onClick={goToLogin}>Área de Admin</button>


    </div>
  )
}

