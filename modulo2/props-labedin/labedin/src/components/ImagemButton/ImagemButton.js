import React from 'react';
import {ContainerDoBotao, ImagemDoBotao} from "./styled"

function ImagemButton(props) {
    return (
        <ContainerDoBotao>
            <ImagemDoBotao src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ContainerDoBotao>

    )
}

export default ImagemButton;