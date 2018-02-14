import React, { Component } from 'react'

class BookAuthors extends Component {
  render() {
    return (
      <div className="book-authors">
        {this.props.authors && this.props.authors.map((author, i) => (
          <span key={i}>{author}<br /></span>
        ))}
      </div>
    )
  }
}

export default BookAuthors;
