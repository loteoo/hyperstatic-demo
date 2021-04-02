import { loadStatic } from 'hyperstatic'

import styles from './character-details.css'
import { preloadImage } from '/effects'

const HandleCharacter = (state, data) => ({
  ...state,
  characters: {
    ...state.characters,
    [data.id]: data
  }
})

// Fetch characters details
export const init = (state, location) => {
  const characterFromList = state.characterlist.find(character => character.id === parseInt(location.params.id));
  return [
    {
      ...state,
      characters: state.characters ?? {}
    },
    loadStatic({
      loader: async () => {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${location.params.id}`
        )
        const { episode, ...data } = await response.json()
        return data
      },
      action: HandleCharacter,
      error: (state) => state
    }),
    characterFromList && preloadImage(characterFromList.image)
  ]
}

// View
const CharacterDetails = (state) => {
  const character = state.characters[state.location.params.id]

  if (!character) {
    return (
      <h2>Loading...</h2>
    )
  }

  return (
    <div>
      <div class={styles.container}>
        <img
          width="300"
          height="300"
          src={character.image}
          alt={character.name}
        />
        <div>
          <h2>{character.name}</h2>
          <div class={styles.infoGrid}>
            <span>Status:</span>
            <span>{character.status}</span>
            <span>Species:</span>
            <span>{character.species}</span>
            {character.type && <span>Type:</span>}
            {character.type && <span>{character.type}</span>}
            <span>Origin:</span>
            <span>{character.origin.name}</span>
            <span>Location:</span>
            <span>{character.location.name}</span>
          </div>
        </div>
      </div>
      <h4>Data: </h4>
      <pre>
        <code>
          {JSON.stringify(character, null, 2)}
        </code>
      </pre>
    </div>
  )
}
export default CharacterDetails
