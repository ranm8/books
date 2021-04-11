import React from 'react';
import { useBooks } from '@deepblue/scopes.ui.hooks.use-books';
import { ThemeProvider } from '@deepblue/scopes.ui.theme-context';
import { Book } from '@deepblue/scopes.ui.book';

export function BookList() {
  const books = useBooks();

  if (!books) return <div>no books found</div>;

  return (
    <ThemeProvider color="blue">
      {books.map((book) => <Book book={book}></Book>)}
    </ThemeProvider>
  );
}
