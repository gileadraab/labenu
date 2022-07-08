import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'

export default function Profiles(props) {
  const [profile, setProfile] = useState({})

  //Call the function getProfile every time the page is rendered
  useEffect(() => {
    getProfile()
  }, [])

  //Get an random profile from the API
  const getProfile = (() => {
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gileadraab/person")
    .then((res) => setProfile(res.data.profile))
    .catch((err) => alert(err.response))
  })

  //Check for the   between the user
  const choosePerson = ((choice) => {
    const match = {
      id:profile.id,
      choice: choice 
    }
    axios
    .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gileadraab/choose-person", match)
    .then ((response) => {
      console.log(response)
      response.data.isMatch  === true && alert("IT'S A MATCH")
      getProfile()
    })
    .catch((err) => alert(err.response))
  })

  const resetProfiles = (() => {
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gileadraab/clear")
    .then(getProfile())
    .catch((err) => alert(err.response))
  })

  return (
    <div>
      <button onClick={() => props.changeScreen("matches")}>Ir para Matches</button>
      <div>Profiles</div>
      <img src={profile.photo} height='200px' ></img>
      <p>Name: {profile.name}, {profile.age}</p> 
      <p>Bio: {profile.bio}</p>
      <button onClick={() => getProfile(false)}>DISLIKE</button>
      <button onClick={() => choosePerson(true)}>LIKE</button>
      <div><button onClick={() => resetProfiles()}>RESETAR PERFIS</button></div>


    </div>
  )
}
