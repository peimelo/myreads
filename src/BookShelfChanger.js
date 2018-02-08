import React, { Component } from 'react'
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelfChange: PropTypes.func.isRequired,
  };

  handleChange = (event) => {
    // console.log(event.target.value)
    // console.log(this.props.book)
    this.props.shelfChange(this.props.book, event.target.value);
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  render() {
    return (
        <div className="book-shelf-changer">
          <select
            value={this.props.book.shelf}
            onChange={this.handleChange}
          >
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
    )
  }
}

export default BookShelfChanger;
