import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export const ApplicationFormPage = () => {
  const [trips, setTrips] = useState([])
  const [tripId, setTripId] = useState ("")
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [applicationText, setApplicationText] = useState("")
  const [profession, setProfession] = useState("")


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

  const onChangeTrip = (event) => {
    setTripId(event.target.value)
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeAge = (event) => {
    setAge(event.target.value)
  }

  const onChangeProfession = (event) => {
    setProfession(event.target.value)
  }

  const onChangeApplicationText = (event) => {
    setApplicationText(event.target.value)
  }

  console.log(tripId)

  const applyToTrip = () => {
    const body = {
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: country
    }


  }

  const tripSelection = trips.map(trip => {
    return <option key={trip.id} value={trip.id}>
    {trip.name}     
  </option>

  })

  return (



    <div>
      <h2>Inscreva-se para uma viagem</h2>

      <p>      
        <select
          name="choseTrip"
          id="trip-select"
          onChange={onChangeTrip}>
          {tripSelection}
        </select>
      </p>
      <p>      
        <input 
        placeholder="Nome"
        value = {name}
        onChange={onChangeName}/>
      </p>
      <p>
        <input 
        placeholder="Idade"
        value = {age}
        onChange={onChangeAge}/>
      </p>
      <p>
        <input placeholder="Texto de Candidatura"
        value = {applicationText}
        onChange={onChangeApplicationText}/>
      </p>
      <p>
        <input placeholder="Profissão"
        value = {profession}
        onChange={onChangeProfession}/>
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
