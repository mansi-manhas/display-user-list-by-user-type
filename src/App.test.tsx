import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App', () => {
  render(<App />);
  const linkElement = screen.getByText('User Types');
  expect(linkElement).toBeInTheDocument();
});
