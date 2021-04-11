import React from 'react';
import { Book } from '@books-demo/ui.book';
import { useBooks } from '@books-demo/ui.use-books';
import { ThemeProvider } from '@books-demo/ui.theme-context';

export const BasicBook = () => {
  const books = useBooks();
  return (
    <ThemeProvider color="blue">
      {books.map((book) => (
        <Book book={book}></Book>
      ))}
    </ThemeProvider>
  );
};
