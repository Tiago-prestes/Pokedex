import React from "react"
import { useHistory } from "react-router-dom"
import { goToPokemonListScreen } from "../../routes/coordinator"
import { Title, GeneralContainer, Button } from "./styled"


const Header = () => {
    const history = useHistory()
    // const [screen, setScreen] = useState(true)

    // const changeScreen = () => {
    //     if(screen === name) {
    //         setScreen(false)
    //         goToPokemonListScreen()
    //     } else {
    //         setScreen(true)
    //         goToPokedex()
    //     }
    // }

    return (
        <GeneralContainer>
            <Title><img src='https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png'></img></Title>
            <Button onClick={() => goToPokemonListScreen(history)}>"Back to PokemonList"</Button>
        </GeneralContainer>
    )
}

export default Header