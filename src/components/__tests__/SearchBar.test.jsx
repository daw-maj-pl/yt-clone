import { render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';

test('renders search input', () => {
  render(<SearchBar />);
  const searchInputEl = screen.getByRole('textbox');
  expect(searchInputEl).toBeInTheDocument();
});

test('renders button of type submit', () => {
  render(<SearchBar />);
  const searchBtnEl = screen.getByRole('button', {
    name: /search/i
  });
  expect(searchBtnEl).toHaveAttribute('type', 'submit');
});
