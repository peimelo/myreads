import React, { Component } from 'react'
import ListBooks from './ListBooks'
import PropTypes from "prop-types";

class BookShelf extends Component {
  static propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const { title, onChangeShelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ListBooks
            books={this.props.books}
            onChangeShelf={onChangeShelf}
          />
        </div>
      </div>
    )
  }
}

export default BookShelf
