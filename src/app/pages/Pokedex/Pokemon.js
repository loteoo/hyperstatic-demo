import { css } from 'emotion'
import { Init as PokedexInit } from './actions'
import { Link } from 'hyperapp-site-generator'

const style = css`
  a {
    display: block;
  }
  .row {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .info {
    padding: 0 1rem;
    > * {
      margin: 0;
    }
  }
`

export default state => {
  const pokemon = state.pokemons
    ? state.pokemons.find(poke => poke.id === parseInt(state.location.params.id))
    : null
  console.log(pokemon)
  return pokemon
    ? (
      <div class={style}>
        <Link to="/pokedex">Back to list</Link>
        <div class="row">
          <img src={pokemon.img} alt={pokemon.name} />
          <div class="info">
            <h3>{pokemon.name}</h3>
            <p><small>Height:</small> {pokemon.height}</p>
            <p><small>Weight:</small> {pokemon.weight}</p>
            <p><small>Types: {pokemon.type.map(type => <b>{type}, </b>)}</small></p>
          </div>
        </div>
        <h4>Data:</h4>
        <pre><code>{JSON.stringify(pokemon, null, 2)}</code></pre>
      </div>
    )
    : 'Pokemons are loading!'
}

export const Init = PokedexInit
