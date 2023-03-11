import { render, screen } from '@testing-library/react';
import Sidebar from '../Sidebar';
import { categories } from '../../utils/constants';

test('renders as many buttons as categories', () => {
  render(<Sidebar />);
  const categoryBtns = screen.getAllByRole('button');
  expect(categories.length).toBe(categoryBtns.length);
});

test('renders first button as a button of category new', () => {
  render(<Sidebar />);
  const categoryBtns = screen.getAllByRole('button');
  expect(categoryBtns[0]).toHaveTextContent(/new/i);
});

test('renders HomeIcon inside of first button', () => {
  render(<Sidebar />);
  const homeIcon = screen.getByTestId('HomeIcon');
  const categoryBtns = screen.getAllByRole('button');
  expect(categoryBtns[0]).toContainElement(homeIcon);
});
