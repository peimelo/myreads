import React from 'react';
import { Route, Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';
import './App.css';

class App extends React.Component {
  state = { books: [] };

  componentDidMount() {
    this.getAll()
  }

  getAll = () => {
    BooksAPI.getAll().then((books) => this.setState({ books }))
  };

  getBooksByShelf = (shelf) => {
    return this.state.books.filter((book) => book.shelf === shelf)
  };

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.getAll())
  };

  render() {
    const shelfs = [
      { name: 'currentlyReading', title: 'Currently Reading' },
      { name: 'wantToRead', title: 'Want to Read' },
      { name: 'read', title: 'Read' }
    ];

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelfs.map((shelf) => (
                  <BookShelf
                    key={shelf.name}
                    books={this.getBooksByShelf(shelf.name)}
                    onChangeShelf={this.updateBook}
                    title={shelf.title}
                  />
                ))}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
                Add a book
              </Link>
            </div>
          </div>
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            myBooks={this.state.books}
            onChangeShelf={this.updateBook}
          />
        )}/>
      </div>
    );
  }
}

export default App
