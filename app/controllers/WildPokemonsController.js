import { AppState } from "../AppState.js"
import { wildPokemonsService } from "../services/WildPokemonsService.js"
import { Pop } from "../utils/Pop.js"

function _drawWildPokemons() {
  const pokemons = AppState.wildPokemons
  let content = ''
  pokemons.forEach(pokemon => content += `
  <div class="text-center mb-2">
    <button onclick="app.WildPokemonsController.getWildPokemonByIndex('${pokemon.index}')"
    class="btn btn-primary w-100">${pokemon.name}</button>
  </div>
  `)
}


export class WildPokemonsController {
  constructor() {
    console.log('Wild pokemons controller loaded')
    this.getWildPokemons()

  }

  async getWildPokemons() {
    try {
      await wildPokemonsService.getWildPokemons()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}