import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios"

const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        getPokemonNames()
    },[])
    
    useEffect(() => { //Vai rodar todas as vezes que o pokemonNames mudar
        const newList = []

        pokemonNames.forEach((item) => {//Para cada item(pokemon) que estiver na lista, faz uma requisição.
            axios
            .get(item.url)
            .then((res) => {
                newList.push(res.data)
                if (newList.length === 20) {
                    setPokemons(newList)
                }
            })
            .catch((error) => {
                console.log(error.message)
            })
        })
    },[pokemonNames])

    const getPokemonNames = () => {
        axios
        .get(`${BASE_URL}/pokemon`)
        .then((res) => {
            setPokemonNames(res.data.results)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const data = {pokemons, setPokemons, pokedex, setPokedex}

    console.log("Hooks pokemons", pokemons)
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState