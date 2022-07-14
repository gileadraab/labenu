import React, { useEffect } from 'react'
import { useProtectedPage } from '../Hooks/useProtectedPage'

export const TripDetailsPage = () => {
  
  useProtectedPage()

  return (
    <div>
      <h2>Detalhes da Viagem</h2>
      <p>Candidatos Pendentes</p>
      
      <p>Candidatos Aprovados</p>

      <p><button>Voltar</button></p>
      
      
    </div>
  )
}

