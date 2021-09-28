import React, { useContext, useEffect, useState } from "react"
import { MainContainerDetails } from "./styled"
import { useParams } from "react-router-dom"
import GlobalStateContext from "../../global/GlobalStateContext"
const PokemonDetailScreen = () => {
    const [chosenPokemon, setChosenPokemon] = useState({})
    const {name} = useParams()
    const {pokemons} = useContext(GlobalStateContext)

    useEffect(() => {
        const currentPokemon = pokemons.find((item) => {return item.name === name})
        setChosenPokemon(currentPokemon)
    }, [])

    return (
        <MainContainerDetails>
            <img src={chosenPokemon && chosenPokemon.sprites && chosenPokemon.sprites.other.dream_world.front_default}/>
        </MainContainerDetails>
    )
}

export default PokemonDetailScreen