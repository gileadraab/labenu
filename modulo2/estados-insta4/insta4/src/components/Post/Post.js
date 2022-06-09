import React from 'react'
import styled from 'styled-components'

import {IconeComContador, IconeSemContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'

import iconeSaveBranco from '../../img/iconeSaveBranco.png'
import iconeSavePreto from '../../img/iconeSavePreto.png'

import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

const SmallerSave = styled.img`
  width: 24px; 
  height: 24px; 
  viewBox: 0px 0px 24px 24px;
`


class Post extends React.Component {
  state = {
    salvo: false,
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    if (this.state.curtido){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1,
        curtido: false
      })
    }else{
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1,
        curtido: true
      })
    }
  }

  onClickSave = () => {

    if(this.state.salvo){
      this.setState({
        salvo: false
      })
    }else{
      this.setState({
        salvo: true
      }) 
    }
  }


  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
    
    let iconeSave

    if(this.state.salvo){
      iconeSave = iconeSavePreto
    }else{
      iconeSave = iconeSaveBranco
    }



    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeSemContador
          icone={iconeSave}
          onClickIcone={this.onClickSave}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post