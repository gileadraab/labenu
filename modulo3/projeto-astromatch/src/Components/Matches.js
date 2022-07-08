import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'

export default function Matches(props) {
  return (
    <div>
      <button onClick={() => props.changeScreen("profiles")}>Ir para Profiles</button>
      <div>Matches</div>
    </div>
  )
}
