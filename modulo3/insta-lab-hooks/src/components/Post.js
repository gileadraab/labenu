import { useState } from "react";

function Post(props) {
  // Passo5

  // Crie a lógica de estados funcionais aqui.
  const [liked, setLiked] = useState(false)
  const [numberLikes, setNumberLikes] = useState(0)
  const [comenting, setComenting] = useState(false)
  const [numberComents, setNumberComents] = useState(0)
  const [coments, setComents] = useState([])
  const [inputValue, setInput] = useState("")


  // Passo7
  const onClickCurtida = () => {
    // Crie a lógica de onClickCurtida aqui.
    if (liked){
      setLiked(!liked)
      setNumberLikes(numberLikes - 1)
    } else {
      setLiked(!liked)
      setNumberLikes (numberLikes+ 1)
    }
  };

  // Passo7
  const onClickComentario = () => {
    // Crie a lógica de onClickComentario aqui.
    setComenting(!comenting)
  };

  // Passo7
  const onChangeComentario = (event) => {
    // Crie a lógica de onChangeComentario aqui.
    setInput(event.target.value)
  };

  // Passo7
  const enviarComentario = (comentario) => {
    // Crie a lógica de enviarComentario aqui.
    const allComents = [...coments, comentario]

    setComents(allComents)
    setComenting(false)
    setNumberComents(numberComents + 1)
    setInput("")
  };

  {/* Passo6 */}
  const caixaDeComentario = comenting == true ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
      <input
        id={"comentario"}
        value={inputValue}
        onChange={onChangeComentario}
      />
      {/* Passo4 */}
      <button onClick = {() => {enviarComentario(inputValue)}}>Enviar</button>
    </>
  ) : (
    // Passo8
    coments.map((comentario, index) => {
      return (
        <div key={index}>
          <p>{comentario}</p>
        </div>
      )
    })
  );

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>{props.nomeUsuario}</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: {numberLikes}</span>
          {/* Passo4 */}
          <button onClick={onClickCurtida} >
            {/* Passo6 */}
            {numberLikes === 0 ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: {numberComents}</span>
          {/* Passo4 */}
          <button onClick={onClickComentario}>
            {/* Passo6 */}
            {comenting === true ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;