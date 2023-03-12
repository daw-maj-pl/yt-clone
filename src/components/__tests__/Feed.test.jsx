import { render, screen, fireEvent } from '@testing-library/react';
import Feed from '../Feed';

test('renders heading with "Coding videos" text after clicking Coding category', () => {
  render(<Feed />);

  const codingCategoryBtn = screen.getByRole('button', {
    name: /coding/i
  });
  const heading = screen.getByRole('heading', {
    name: /videos/i
  });
  fireEvent.click(codingCategoryBtn);

  expect(heading).toHaveTextContent('Coding videos');
});
