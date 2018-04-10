import React from 'react';

function BookAuthors({ authors }) {
  return (
    <div className="book-authors">
      {authors && authors.map((author) => (
        <span key={author}>
          {author}<br/>
        </span>
      ))}
    </div>
  );
}

export default BookAuthors
