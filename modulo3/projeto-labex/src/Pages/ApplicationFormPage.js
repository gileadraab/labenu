import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useMemo } from 'react'
import countryList from 'react-select-country-list'
import { useNavigate } from 'react-router'
import { goBack } from '../Routes/Coordinator'

export const ApplicationFormPage = () => {
  const [trips, setTrips] = useState([])
  const [tripId, setTripId] = useState ("")
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [applicationText, setApplicationText] = useState("")
  const [profession, setProfession] = useState("")
  const [country, setCountry] = useState("")

  const navigate = useNavigate()

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

  const onChangeTripId = (event) => {
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

  const onChangeCountry = (event) => {
    setCountry(event.target.value)
  }

  const applyToTrip = () => {
    const body = {
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: country
    }

    const id = tripId

    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gileadraab/trips/${id}/apply`, body)
    .then ((response) => {
      alert("Aplicação enviada com sucesso!")
      setName("")
      setAge(0)
      setApplicationText("")
      setProfession("")
      setCountry("")
    })
    .catch ((err) => {
      alert(err.response)
    })
  }

  const tripSelection = trips.map(trip => {
    return <option key={trip.id} value={trip.id}>
      {trip.name}     
    </option>
  })

  const countryOptions = useMemo(() => countryList().getData(), [])
  
  const countrySelection = countryOptions.map(country => {
    return <option key={country.value} value={country.label}>
      {country.label}     
    </option>
  })

  return (
    <div>
      <h2>Inscreva-se para uma viagem</h2>

      <p>      
        <select
          name="choseTrip"
          id="trip-select"
          onChange={onChangeTripId}>
          <option>Escolha seu destino</option>
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
        <select
          name="choseCountry"
          id="country-select"
          onChange={onChangeCountry}>
          <option>País</option>
          {countrySelection}
        </select>
      </p>

      <p>
        <button onClick={()=> goBack(navigate)}>Voltar</button><button onClick={applyToTrip}>Enviar</button>
      </p>
    </div>
  )
}
