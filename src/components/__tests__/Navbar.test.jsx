import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

test('renders logo as a link', () => {
  render(<Navbar />, { wrapper: BrowserRouter });
  const linkEl = screen.getByRole('link', { name: /logo/i });
  const logoImgEl = screen.getByRole('img', {
    name: /logo/i
  });
  expect(linkEl).toContainElement(logoImgEl);
});
