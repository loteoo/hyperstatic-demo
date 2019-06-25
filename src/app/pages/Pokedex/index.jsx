import description from './description.md'
import { targetValue } from '../../../utils'
import { css } from 'emotion'

import { SetPokeSearch, ClearSearch, Init as PokedexInit } from './actions'

const pokedex = css`
  .search {
    display: flex;
    align-items: center;
  }
  .clear {
    margin: 1rem;
    cursor: pointer;
    text-decoration: underline;
  }
  .poke-info {
    padding: 0 1rem;
    > * {
      margin: 0;
    }
  }
`

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin: 1rem 0;
`

const card = css`
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
`

export default state => (
  <div class={pokedex}>
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
    <div class={grid}>
      {state.pokemons
        ? state.pokemons
          .filter(pokemon => pokemon.name.toLowerCase().includes(state.pokeSearch.toLowerCase()))
          .map(pokemon => (
            <div class={card}>
              <img src={pokemon.img} alt={pokemon.name} />
              <div class="poke-info">
                <h3>{pokemon.name}</h3>
                <p><small>Height:</small> {pokemon.height}</p>
                <p><small>Weight:</small> {pokemon.weight}</p>
                <p><small>Types: {pokemon.type.map(type => <b>{type}, </b>)}</small></p>
              </div>
            </div>
          ))
        : 'Pokemons are loading!'
      }
    </div>
  </div>
)

export const Init = PokedexInit
