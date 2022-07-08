import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'

export default function Matches(props) {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = (() => {
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gileadraab/matches")
    .then((res) => setMatches(res.data.matches))
    .catch((err) => alert(err.response))
  })

  console.log(matches)
  const showMatches = matches.map(match => {
    return <div><img src= {match.photo}height='50px' width='50px'/>{match.name}</div>
  })


  return (
    <div>
      <button onClick={() => props.changeScreen("profiles")}>Ir para Profiles</button>
      <div>Matches</div>
      {showMatches}
    </div>
  )
}
