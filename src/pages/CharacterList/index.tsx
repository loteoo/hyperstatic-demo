import utils from '/styles/utils.css'
import { Link, loadStatic } from 'hyperstatic'

import styles from './character-list.css'
import statusEmojis from '/utils/statusEmojis'

const HandleCharacters = (state, data) => ({
  ...state,
  characterlist: state.characterlist.concat(data)
})

// Fetch characters
export const init = (state) => [
  {
    ...state,
    characterlist: []
  },
  loadStatic({
    loader: async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character`)
      const data = await response.json()
      const simplified = data.results.map((character) => ({
        id: character.id,
        name: character.name,
        image: character.image,
        species: character.species,
        status: character.status,
      }))
      return simplified
    },
    action: HandleCharacters,
    error: (state) => state
  })
]

// View
const CharacterList = (state) => (
  <div>
    <h2>Data fetching example</h2>
    <p>Demo page displaying a list of items from an external API. Each page is prerendered</p>
    <h4>Rick and Morty characters</h4>
    <div class={`${styles.listContainer} ${utils.grid}`}>
      {state.characterlist.map((character) => (
        <Link class={styles.card} href={`/characters/${character.id}`}>
          {({ status }) => (
            <span>
              <h4 class={styles.cardTitle}>{character.name}</h4>
              <small>
                {character.species}, {character.status} - {status} {statusEmojis[status]}
              </small>
            </span>
          )}
        </Link>
      ))}
    </div>
  </div>
)

export default CharacterList
