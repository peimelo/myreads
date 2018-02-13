import React, { Component } from 'react'
import ListBook from './ListBook'
import PropTypes from "prop-types";

class BookShelf extends Component {
  static propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  };

  render () {
    const { title, onChangeShelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <ListBook
          books={this.props.books}
          onChangeShelf={onChangeShelf}
        />
      </div>
    )
  }
}

export default BookShelf
