import React from 'react';

import { useBooks } from '@books-demo/ui.use-books';
import { ThemeProvider } from '@books-demo/ui.theme-context';
import { Book } from '@books-demo/ui.book';

export function BookList() {
  const books = useBooks();

  if (!books) return <div>no books found</div>;

  return (
    <ThemeProvider color="blue">
      {books.map((book) => (
        <Book book={book}></Book>
      ))}
    </ThemeProvider>
  );
}
