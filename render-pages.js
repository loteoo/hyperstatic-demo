import fetch from 'node-fetch'
import { renderPages } from 'hyperapp-site-generator'
import routes from './src/app/routes'

// Return URLs that need to be rendered
const getUrls = async (pages) => {
  // Omit the "Apod" page from pre-rendering
  pages = pages.filter(page => page !== '/apod')

  // Get a list of pokemon pages
  const pokemonPages = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
    .then(response => response.json())
    .then(data => data.pokemon.map(pokemon => `/pokemons/${pokemon.id}`))

  // Add pokemons pages to urls
  pages = pages.concat(pokemonPages)

  return pages
}

renderPages(routes, getUrls)
  .then('All pages rendered!')
