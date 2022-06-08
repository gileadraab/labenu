import React from 'react';
import {CardGrandeStyled, CardGrandeImagem, Nome, ContainerDaDEscricao} from "./styled"

function CardGrande(props) {
    return (
        <CardGrandeStyled>
            <CardGrandeImagem src={ props.imagem } />
            <ContainerDaDEscricao>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </ContainerDaDEscricao>
        </CardGrandeStyled>
    )
}

export default CardGrande;