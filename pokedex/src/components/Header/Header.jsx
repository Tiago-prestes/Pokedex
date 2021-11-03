import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { goToPokedex, goToPokemonListScreen } from "../../routes/coordinator"
import { Title, GeneralContainer, Button } from "./styled"


const Header = () => {
    const history = useHistory()
    // const [screen, setScreen] = useState(true)

    // const changeScreen = () => {
    //     if(screen === false) {
    //         setScreen(false)
    //         goToPokemonListScreen(history)
    //     } else {
    //         setScreen(true)
    //         goToPokedex(history)
    //     }
    // }

    return (
        <GeneralContainer>
            <Title onClick={() => goToPokemonListScreen(history)}><img src='https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png'></img></Title>
            <Button onClick={() => goToPokedex(history)}>Ir para pokedex</Button>
        </GeneralContainer>
    )
}

export default Header