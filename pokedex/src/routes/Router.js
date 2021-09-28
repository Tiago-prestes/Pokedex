import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../components/Header/Header";
import PokedexScreen from "../screens/PokedexScreen/PokedexScreen";
import PokemonDetailScreen from "../screens/PokemonDetailScreen/PokemonDetailScreen";
import PokemonListScreen from "../screens/PokemonListScreen/PokemonListScreen";

const Router = () => {
  return (
      <BrowserRouter>
              <Header />

        <Switch>
            <Route exact path={"/"} component={PokemonListScreen}/>
            <Route exact path={"/pokemon/:name"} component={PokemonDetailScreen}/>
            <Route exact path={"/pokedex"} component={PokedexScreen}/>
        </Switch>
      </BrowserRouter>
  )
}

export default Router