import { pokeApi } from "./AxiosService.js"



class WildPokemonsService {
  async getWildPokemons() {
    const res = await pokeApi.get('')
    console.log('got wild pokemon', res.data)
  }
}

export const wildPokemonsService = new WildPokemonsService()