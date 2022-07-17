import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../Hooks/useProtectedPage'
import {goToHomePage, goToTripDetails, goToCreateTrip, goToLogin } from '../Routes/Coordinator'
import { useParams } from 'react-router-dom'

export const AdminHomePage = () => {
  const [trips, setTrips] = useState([])

  const navigate = useNavigate()
  const pathParams = useParams()

  const token = localStorage.getItem("token")
  
  useProtectedPage()


  useEffect(() => {
    axios
    .get ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gileadraab/trips")
    .then((response) => {
      setTrips(response.data.trips)
    })
    .catch((err) => {
      alert(err.response)
    })

  }, [trips])

  const deleteTrip = (tripID) => {
    const id = tripID

    axios
    .delete (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gileadraab/trips/${id}`, {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      alert("Viagem deletada com sucesso")
    })
    .catch((err) => {
      alert("Ocorreu um erro ao tentar deletar esta viagem")
    })
  }

  const logout = (navigate) => {
      localStorage.removeItem('token')
      goToLogin(navigate)
  }
    

    const listTrips = trips.map(trip => {
    return <div>
      <p onClick={()=> goToTripDetails(navigate, trip.id)}>{trip.name}</p><button onClick={()=>deleteTrip(trip.id)}>Deletar viagem</button>
    </div>
  })
  return (
    <div>
      <h2>Painel Administrativo</h2>
      <p>
        <button onClick={()=> goToHomePage(navigate)}>Voltar</button><button onClick={()=> goToCreateTrip(navigate)}>Criar Viagem</button><button onClick={()=>logout(navigate)}>Logout</button>
      </p>
      {listTrips}



    </div>
  )
}

