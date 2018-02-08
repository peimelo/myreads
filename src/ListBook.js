import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class ListBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  //   updateBook: PropTypes.func.isRequired
  };

  updateBook = (book, shelf) => {
    this.props.onChangeShelf(book, shelf)
  }

  render() {
    const { books } = this.props;

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
                  }}></div>
                  <BookShelfChanger
                    book={book}
                    shelfChange={this.updateBook}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListBook;