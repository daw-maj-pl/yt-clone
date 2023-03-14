import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from '../SearchBar';

test('renders search input', () => {
  render(<SearchBar />, { wrapper: BrowserRouter });
  const searchInputEl = screen.getByRole('textbox');
  expect(searchInputEl).toBeInTheDocument();
});

test('renders button of type submit', () => {
  render(<SearchBar />, { wrapper: BrowserRouter });
  const searchBtnEl = screen.getByRole('button', {
    name: /search/i
  });
  expect(searchBtnEl).toHaveAttribute('type', 'submit');
});
