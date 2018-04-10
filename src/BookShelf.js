import React from 'react';

import ListBooks from './ListBooks'

function BookShelf({ books, onChangeShelf, title }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ListBooks
          books={books}
          onChangeShelf={onChangeShelf}
        />
      </div>
    </div>
  );
}

export default BookShelf
