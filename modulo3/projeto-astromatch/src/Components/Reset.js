import React from 'react'
import { MatchesContainer, ResetContainer, ResetButton } from './Styles'

export default function Reset(props) {
      return (
      <MatchesContainer><ResetContainer>Seus Likes acabaram, clique para reiniciar <ResetButton onClick={() => props.resetProfiles()}>RESETAR PROFILES</ResetButton></ResetContainer></MatchesContainer>
    )
  }
