import React from 'react';
// import { Book as BookModel } from '@deepblue/scopes.models.scope.book';
import { Book as BookModel } from '@books-demo/book';

export type BookProps = {
  /**
   * a text to be rendered in the component.
   */
  book: BookModel;
};

export function Book({ book }: BookProps) {
  return (
    <div>
      {book.name} (Title size is {book.getTitleSize()})
    </div>
  );
}
