import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../Hooks/useProtectedPage'

export const AdminHomePage = () => {

  useProtectedPage()


  return (
    <div>
      <h2>Painel Administrativo</h2>
      <p>
        <button>Voltar</button><button>Criar Viagem</button><button>Logout</button>
      </p>



    </div>
  )
}

