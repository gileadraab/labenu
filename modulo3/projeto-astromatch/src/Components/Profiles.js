import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'

export default function Profiles(props) {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = (()=>{
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gileadraab/person")
    .then((res) => setProfile(res.data.profile))
    .catch((err) => alert(err.response))
    }
  )

  return (
    <div>
      <button onClick={() => props.changeScreen("matches")}>Ir para Matches</button>
      <div>Profiles</div>
      <img src={profile.photo}></img>
      <p>Name: {profile.name}, {profile.age}</p> 
      <p>Bio: {profile.bio}</p>
      <button onClick={() => props.changeScreen("matches")}>LIKE</button>
      <button onClick={() => getProfile()}>DISLIKE</button>


    </div>
  )
}
