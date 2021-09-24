import React, { useContext } from "react"
import Header from "../../components/Header/Header"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import GlobalStateContext from "../../global/GlobalStateContext"

const PokemonListScreen = () => {
    const {pokemons} = useContext(GlobalStateContext)

    return (
        <div>
            <Header/>
            { pokemons.map(( id, name ) => {
                    return <PokemonCard key={id}
                            name={name}
                            // sprites={}
                    />
                })
            }
            PokemonListScreen
        </div>
    )
}

export default PokemonListScreen