import React from 'react';
import {CardpequenoStyled, CardPequenoImagem, Nome, ContainerDaDEscricao} from "./styled"

function CardPequeno(props) {
    return (
        <CardpequenoStyled>
            <CardPequenoImagem src={ props.imagem } />
            <Nome>{ props.email }</Nome>
            <Nome>{ props.adress }</Nome>
        </CardpequenoStyled>
    )
}

export default CardPequeno;