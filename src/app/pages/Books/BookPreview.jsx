
import { Link } from 'hyperapp-site-generator'

import './book-preview.css'

export default ({ book, state }) => (
  <Link to={`/books/${book.id}`} state={state} class="book-preview">
    <div class="top">
      <div class="img">
        {book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />}
      </div>
      <div class="info">
        <h3 class="title">{book.volumeInfo.title}</h3>
        <small>{book.volumeInfo.subtitle}</small>
        <div class="author">
          <p>Written By: </p>
          {book.volumeInfo.authors && book.volumeInfo.authors.map(author => (
            <span>{author}, </span>
          ))}
        </div>
      </div>
    </div>
    <p class="description">{book.volumeInfo.description && book.volumeInfo.description.substring(0, 150)}...</p>
  </Link>
)
