import React from 'react'
import styled from 'styled-components'

const PostContainer = styled.div`
    width: 95%;
    margin: 2%;
    word-wrap: break-word;
`
const UserName = styled.span`
    font-weight: bold;
`

const Message = styled.span`
    background-color: white;
    padding: 0.2em 0.7em;
    border-radius: 0.4em;
    font-weight: 450;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2)
`


class Messages extends React.Component {

  render() {
    
    return <PostContainer><UserName>{this.props.userName}</UserName>  :  <Message>{this.props.sentMessage}</Message></PostContainer>

    }
  }
  
  export default Messages