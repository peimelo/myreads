import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookAuthors from './BookAuthors'
import BookShelfChanger from './BookShelfChanger'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    myBooks: PropTypes.array,
    onChangeShelf: PropTypes.func.isRequired
  };

  getShelf = (book) => {
    const findedBook = this.props.myBooks.filter((myBook) => myBook.id === book.id);

    if (findedBook.length === 1) {
      return findedBook[0].shelf
    } else {
      return 'none'
    }
  };

  render() {
    const { books, onChangeShelf } = this.props;

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`
                }}>
                </div>
                <BookShelfChanger
                  bookShelf={book.shelf || this.getShelf(book)}
                  shelfChange={(shelf) => onChangeShelf(book, shelf)}
                />
              </div>
              <div className="book-title">{book.title}</div>
              <BookAuthors authors={book.authors} />
            </div>
          </li>
        ))}
      </ol>
    );
  }
}

export default ListBooks
