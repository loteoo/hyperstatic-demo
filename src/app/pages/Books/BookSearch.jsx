import { targetValue } from '../../../utils'
import { Init as BookInit, SearchBooks, ClearSearch } from './actions'
import BookPreview from './BookPreview'
import description from './description.md'

import './book-search.css'

export default (state) => {
  return (
    <div class="book-search">
      <div innerHTML={description}></div>
      <label for="search">Search for a book</label>
      <div class="search">
        <input
          id="search"
          name="search"
          value={state.books.search}
          oninput={[SearchBooks, targetValue]}
        />
        {state.books.search && <a class="clear" onclick={ClearSearch}>Clear</a>}
      </div>
      <div>
        {!state.books.results
          ? <h4>Search for any existing book!</h4>
          : state.books.results === 0
            ? <h4>No results</h4>
            : (
              <div>
                <h4>{state.books.total} books found!</h4>
                <div class="grid">
                  {state.books.results.map(id => <BookPreview book={state.books.books[id]} state={state} />)}
                </div>
              </div>
            )
        }
      </div>
    </div>
  )
}

export const Init = BookInit
