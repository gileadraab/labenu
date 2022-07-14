import React from 'react'
import { useProtectedPage } from '../Hooks/useProtectedPage'

export const CreateTripPage = () => {

  useProtectedPage()

  return (
    <div>
      <h2>Criar Viagem</h2>

      <p>      
        <input placeholder="Nome"/>
      </p>
      <p>
        <select>
          <option>Escolha um Planeta</option>
        </select>
      </p>
      <p>
        <input placeholder="Escolha uma data" type="date" value=""/>
      </p>
      <p>
        <input placeholder="Descrição"/>
      </p>
      <p>
        <input placeholder="Duração em dias"/>
      </p>


      <p>
        <button>Voltar</button><button>Criar</button>
      </p>
    </div>
  )
}

