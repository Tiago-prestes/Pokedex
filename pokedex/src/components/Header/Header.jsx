import React from "react"
import { Title, GeneralContainer, Button } from "./styled"


const Header = () => {
    return (
        <GeneralContainer>
            <Title><img src='https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png'></img></Title>
            <Button >{Screen ? "Go to Pokedex" : "Back to PokemonList"}</Button>
        </GeneralContainer>
    )
}

export default Header