import description from './description.md'
import { targetValue } from '../../../utils'

import { SetPokeSearch, ClearSearch, Init as PokedexInit } from './actions'
import { Link } from 'hyperapp-site-generator'

import './pokedex.css'

export default state => (
  <div class="pokedex">
    <div innerHTML={description}></div>
    <label for="searchField">Search pokemons</label>
    <div class="search">
      <input
        id="searchField"
        name="searchField"
        value={state.pokeSearch}
        oninput={[SetPokeSearch, targetValue]}
        placeholder="Type here..."
      />
      {state.pokeSearch && <a class="clear" onclick={ClearSearch}>Clear</a>}
    </div>
    <div class="grid">
      {state.pokemons
        ? state.pokemons
          .filter(pokemon => pokemon.name.toLowerCase().includes(state.pokeSearch.toLowerCase()))
          .map(pokemon => (
            <Link to={`/pokedex/${pokemon.id}`} class="card">
              <img src={pokemon.img} alt={pokemon.name} />
              <div class="poke-info">
                <h3>{pokemon.name}</h3>
                <p><small>Height:</small> {pokemon.height}</p>
                <p><small>Weight:</small> {pokemon.weight}</p>
                <p><small>Types: {pokemon.type.map(type => <b>{type}, </b>)}</small></p>
              </div>
            </Link>
          ))
        : 'Pokemons are loading!'
      }
    </div>
  </div>
)

export const Init = PokedexInit
