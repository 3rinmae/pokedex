import { AppState } from "../AppState.js"
import { wildPokemonsService } from "../services/WildPokemonsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawWildPokemons() {
  const pokemons = AppState.wildPokemons
  let content = ''
  pokemons.forEach(pokemon => content += `
  <div class="text-center mb-2">
    <button onclick="app.WildPokemonsController.getWildPokemonByUrl('${pokemon.url}')"
    class="btn btn-dark w-100">${pokemon.name}</button>
  </div>
  `)
  setHTML('pokemonList', content)
}

function _drawActive() {
  setHTML('active', AppState.activePokemon?.activeTemplate)
}


export class WildPokemonsController {
  constructor() {
    console.log('Wild pokemons controller loaded')
    this.getWildPokemons()
    AppState.on('wildPokemons', _drawWildPokemons)
    AppState.on('activePokemon', _drawActive)
  }

  async getWildPokemons() {
    try {
      await wildPokemonsService.getWildPokemons()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async getWildPokemonByUrl(url) {
    try {
      await wildPokemonsService.getWildPokemonByUrl(url)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

}