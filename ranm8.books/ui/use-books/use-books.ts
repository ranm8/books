import { useState } from 'react';
import { Book } from '@deepblue/scopes.models.scope.book';

export const useB = () => {

};

export function useBooks() {
  const [books, setBooks] = useState<Book[]>(); 

  fetch('api/books').then((response) => {
    const rawBooks: any = response.json();
    setBooks(rawBooks.map((rawBook: any) => new Book(rawBook.name)));
  });
  
  return books;
}
