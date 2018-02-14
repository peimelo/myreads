import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'

class SearchBooks extends Component {
  state = {
    books: [],
    query: ''
  };

  search = () => {
    if (this.state.query) {
      BooksAPI.search(this.state.query).then((books) => {
        if (books && books.length) {
          this.setState({ books })
        } else {
          this.setState({ books: [] })
        }
      })
    } else {
      this.setState({ books: [] })
    }
  };

  updateQueryAndSearch = (query) => {
    this.setState({ query });
    this.search();
  };

  render() {
    const { query } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQueryAndSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ListBooks
            books={this.state.books}
            myBooks={this.props.myBooks}
            onChangeShelf={this.props.onChangeShelf}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks
