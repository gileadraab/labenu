import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import { SecaoComentario } from './components/SecaoComentario/SecaoComentario';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
 
class App extends React.Component {
  state={
    posts:[
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        nomeUsuario:'joaopedro',
        fotoUsuario:'https://picsum.photos/50/60',
        fotoPost:'https://picsum.photos/200/160'
      },

      {
        nomeUsuario: 'marina',
        fotoUsuario: 'https://picsum.photos/60/70',
        fotoPost: 'https://picsum.photos/200/170'
      }

    ],

    newUserName: "",
    newUserPhoto: "",
    newUserPost: ""
  };

  addNewPost = () => {

    const newPost = {
      nomeUsuario: this.state.newUserName,
      fotoUsuario: this.state.newUserPhoto,
      fotoPost: this.state.newUserPost
    }

    const newPosts = [...this.state.posts, newPost]

    this.setState({posts: newPosts});
  };

  onChangeInputUsario = (event) => {
    this.setState({newUserName: event.target.value})
  };

  onChangeInputFoto = (event) => {
    this.setState({newUserPhoto: event.target.value})
  };

  onChangeInputPost = (event) => {
    this.setState({newUserPost: event.target.value})
  };


  render() {
    const postsDaPagina = this.state.posts.map((post)=>{
      return <Post
        nomeUsuario= {post.nomeUsuario} 
        fotoUsuario= {post.fotoUsuario} 
        fotoPost = {post.fotoPost}
        />;
    });

    return (
      <MainContainer>
        <div>
          <input 
            value = {this.state.newUserName}
            onChange={this.onChangeInputUsario}
            placeholder={"Username"}
            />

          <input 
            value = {this.state.newUserPhoto}
            onChange={this.onChangeInputFoto}
            placeholder={"Link to avatar"}
            />

          <input 
            value = {this.state.newUserPost}
            onChange={this.onChangeInputPost}
            placeholder={"Link to post"}
            />
          <button onClick={this.addNewPost}>Adicionar</button>


        </div>


        {postsDaPagina}
      </MainContainer>
    );
  }
}

export default App;
