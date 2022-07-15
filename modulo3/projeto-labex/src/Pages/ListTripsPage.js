import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

export const ListTripsPage = () => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    axios
    .get ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gileadraab/trips")
    .then((response) => {
      setTrips(response.data.trips)
    })
    .catch((err) => {
      alert(err.response)
    })

  }, [])

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const goToApplicationForm = () => {
    navigate("/application")
  }

  const listTrips = trips.map(trip => {
    return <div>
      <p>Nome: {trip.name}</p>      
      <p>Descrição: {trip.description}</p>      
      <p>Planeta: {trip.planet}</p>      
      <p>Duração: {trip.durationInDays}</p>     
      <p>Data: {trip.date}</p>
    </div>
  })


  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToApplicationForm}>Inscrever-se</button>
      <p>Lista de Viagens</p>
      {listTrips}
    </div>
  )
}
