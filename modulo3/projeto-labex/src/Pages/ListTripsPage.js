import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ListTripsPage = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <button>Inscrever-se</button>
      <p>Lista de Viagens</p>
    </div>
  )
}
