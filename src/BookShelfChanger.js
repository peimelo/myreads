import React from 'react'

function BookShelfChanger({ bookShelf, shelfChange }) {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(event) => shelfChange(event.target.value)}
        value={bookShelf}
      >
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookShelfChanger
