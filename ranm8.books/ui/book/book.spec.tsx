import React from 'react';
import { render } from '@testing-library/react';
import { BasicBook } from './book.composition';

describe('Slide', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicBook />);
    const rendered = getByText('hello from Slide');
    expect(rendered).toBeTruthy();
  });
});
