import React, { Component } from 'react'
import PropTypes from "prop-types";

class BookAuthors extends Component {
  static propTypes = {
    authors: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="book-authors">
        {this.props.authors.map((author, i) => (
          <span key={i}>{author}<br /></span>
        ))}
      </div>
    )
  }
}

export default BookAuthors;
