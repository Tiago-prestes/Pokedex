import React, { useContext } from "react"
import Header from "../../components/Header/Header"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import GlobalStateContext from "../../global/GlobalStateContext"
import { GridContainer } from "./styled"

const PokemonListScreen = () => {
    const {pokemons} = useContext(GlobalStateContext)

    return (
        <GridContainer>
            { pokemons.map(( poke ) => {
                    return <PokemonCard key={poke.id} pokemon={poke}
                    />
                })
            }
        </GridContainer>
    )
}

export default PokemonListScreen