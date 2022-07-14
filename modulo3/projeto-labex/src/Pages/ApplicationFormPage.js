import React from 'react'

export const ApplicationFormPage = () => {
  return (
    <div>
      <h2>Inscreva-se para uma viagem</h2>

      <p>      
        <select>
          <option>Escolha uma viagem</option>
        </select>
      </p>
      <p>      
        <input placeholder="Nome"/>
      </p>
      <p>
        <input placeholder="Idade"/>
      </p>
      <p>
        <input placeholder="Texto de Candidatura"/>
      </p>
      <p>
        <input placeholder="Texto de Candidatura"/>
      </p>
      <p>
        <select>
          <option>Escolha um País</option>
        </select>
      </p>

      <p>
        <button>Voltar</button><button>Enviar</button>
      </p>
    </div>
  )
}
