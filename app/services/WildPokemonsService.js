import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"



class WildPokemonsService {
  async getWildPokemons() {
    const res = await pokeApi.get('')
    console.log('got wild pokemon', res.data)
    AppState.wildPokemons = res.data.results
  }

  async getWildPokemonByUrl(url) {
    const res = await pokeApi.get(url)
    console.log(url, res.data)
    let newPokemon = new Pokemon(res.data)
    console.log('new poke', newPokemon)
    AppState.activePokemon = newPokemon
  }
}

export const wildPokemonsService = new WildPokemonsService()