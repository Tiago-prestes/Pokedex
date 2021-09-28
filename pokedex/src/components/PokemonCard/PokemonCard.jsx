import React from "react"
import { goToPokemonDetail } from "../../routes/coordinator"
import { Buttons, ButtonsContainer, Image, MainContainer } from "./styled"
import { useHistory } from "react-router-dom"

const PokemonCard = ({pokemon}) => {
    const history = useHistory()

    return (
        <MainContainer>
        <Image src={pokemon.sprites.front_default}></Image>
        <p>{pokemon.name}</p>
    <ButtonsContainer>
            {/* <Buttons><p> Remover </p></Buttons> */}
            <Buttons><p>Add Pokedex</p></Buttons>
        <Buttons onClick={() => goToPokemonDetail(history, pokemon.name)}><p>Ver detalhes</p></Buttons>
    </ButtonsContainer>
</MainContainer>
    )
}


export default PokemonCard