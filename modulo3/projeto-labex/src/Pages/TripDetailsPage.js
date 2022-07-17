import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { goBack } from '../Routes/Coordinator'
import { useProtectedPage } from '../Hooks/useProtectedPage'
import { useParams, useNavigate } from 'react-router-dom'

export const TripDetailsPage = () => {
  const [tripDetails, setTripDetails] = useState({})
  const [tripCandidates, setTripCandidates] = useState([])
  const [approvedCandidatesArray, setApprovedCandidatesArray] = useState([])

  useProtectedPage()

  const token = localStorage.getItem("token")

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const id = params.id

    axios
    .get (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gileadraab/trip/${id}`, {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      setTripDetails(response.data.trip)
      setTripCandidates(response.data.trip.candidates)
      setApprovedCandidatesArray(response.data.trip.approved)
    })
    .catch((err) => {
      alert("Não foi possivel localizar esta viagem")
    })

  }, [tripCandidates])

  const decideCandidate = (choice, candidate) => {
    const tripId = params.id
    const candidateId = candidate

    const body = {
      approve: choice
    }

    axios
    .put (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gileadraab/trips/${tripId}/candidates/${candidateId}/decide`, body, {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      alert(response.data.message)
    })
    .catch((err) => {
      alert(err.response)
    })
  }

  const pendingCandidates = tripCandidates.map(candidate =>{
    return <div>
      <p>Nome: {candidate.name}</p>      
      <p>Idade: {candidate.age}</p>   
      <p>Profissão: {candidate.profession}</p>      
      <p>País: {candidate.country}</p>
      <p>Texto de Candidatura: {candidate.applicationText}</p> 
      <p><button onClick={()=>decideCandidate(false, candidate.id)}>Reprovar</button><button onClick={()=>decideCandidate(true, candidate.id)}>Aprovar</button></p>     
    </div>
  })

  const approvedCandidates = approvedCandidatesArray.map(candidate =>{
    return <div>
    <p>- {candidate.name}</p> 
    </div>   
  })

  return (
    <div>
      <h2>Detalhes da Viagem</h2>
      <p>Nome: {tripDetails.name}</p>
      <p>Descrição: {tripDetails.description}</p>
      <p>Planeta: {tripDetails.planet}</p>
      <p>Duração: {tripDetails.durationInDays}</p>
      <p>Data: {tripDetails.date}</p>


      <h2>Candidatos Pendentes</h2>
      {pendingCandidates} 
      
      <h2>Candidatos Aprovados</h2>
      {approvedCandidates}


      <p><button onClick={()=>goBack(navigate)}>Voltar</button></p>
      
      
    </div>
  )
}

