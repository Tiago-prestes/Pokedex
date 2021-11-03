import React, { useContext } from "react"
import { useHistory } from "react-router"
import { GridContainer } from "./styled"
import GlobalStateContext from "../../global/GlobalStateContext";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const PokedexScreen = () => {
    const history = useHistory()
    const {pokedex} = useContext(GlobalStateContext)

    return (
        <GridContainer>
            {
                pokedex && pokedex.map((poke) => {
                    return <PokemonCard key={poke.id} isPokedex pokemon={poke}/>
                })
            }
        </GridContainer>
    )
}

export default PokedexScreen