import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookAuthors from './BookAuthors'
import BookShelfChanger from './BookShelfChanger'

class ListBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  render() {
    const { books, onChangeShelf } = this.props;

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                  }}>
                  </div>
                  <BookShelfChanger
                    bookShelf={book.shelf}
                    shelfChange={(shelf) => onChangeShelf(book, shelf)}
                  />
                </div>
                <div className="book-title">{book.title}</div>
                <BookAuthors authors={book.authors}/>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListBook;
