import { mockBook } from '@deepblue/scopes.models.scope.book';
import React from 'react';
import { Book } from './book';

export const BasicBook = () => {
  const book = mockBook();
  return <Book book={book} />;
};
