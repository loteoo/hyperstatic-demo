
import { LoadBookIfNeeded } from './actions'

import BookPreview from './BookPreview'
import { Link } from 'hyperstatic'

export default (state) => (
  <div>
    <Link to="/books">Back to list</Link>
    <h2>Book view</h2>
    {state.books && state.books.books[state.location.params.id]
      ? <BookPreview state={state} book={state.books.books[state.location.params.id]} />
      : <h3>Loading...</h3>
    }
  </div>
)

export const Init = LoadBookIfNeeded
