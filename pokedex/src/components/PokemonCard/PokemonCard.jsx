import React, { useContext } from "react"
import { goToPokemonDetail } from "../../routes/coordinator"
import { Buttons, ButtonsContainer, Image, MainContainer } from "./styled"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../../global/GlobalStateContext"

const PokemonCard = ({pokemon, isPokedex}) => {
    const history = useHistory()
    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)

    const addPokedex = () => {
        const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name)
        const newPokemonList = [...pokemons]
        newPokemonList.splice(pokeIndex, 1)
        const newPokedexList = [...pokedex, pokemon]

        setPokedex(newPokedexList)
        setPokemons(newPokemonList)
    }

    const removePokedex = () => {
        const pokeIndex = pokedex.findIndex((item) => item.name === pokemon.name)
        const newPokedexList = [...pokedex]
        newPokedexList.splice(pokeIndex, 1)
        const newPokemonList = [...pokemons, pokemon]
        setPokedex(newPokedexList)
        setPokemons(newPokemonList)

    }

    return (
        <MainContainer>
        <Image src={pokemon.sprites.front_default}></Image>
        <p>{pokemon.name}</p>
    <ButtonsContainer>
            <Buttons onClick={isPokedex ? removePokedex : addPokedex}>
                <p>{isPokedex ? 'Remover da Pokedex' : 'Add Pokedex'}
            </p></Buttons>
        <Buttons onClick={() => goToPokemonDetail(history, pokemon.name)}><p>Ver detalhes</p></Buttons>
    </ButtonsContainer>
</MainContainer>
    )
}


export default PokemonCard