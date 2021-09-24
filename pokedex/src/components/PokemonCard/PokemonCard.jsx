import React from "react"
import { Buttons, ButtonsContainer, Image, MainContainer } from "./styled"

const PokemonCard = (props) => {
    return (
        <MainContainer>
        <Image src={props.img}></Image>
        <p>{props.name} / {props.order}</p>
    <ButtonsContainer>
            {/* <Buttons><p> Remover </p></Buttons> */}
            <Buttons><p>Add Pokedex</p></Buttons>
        <Buttons><p>Ver detalhes</p></Buttons>
    </ButtonsContainer>
</MainContainer>
    )
}

export default PokemonCard