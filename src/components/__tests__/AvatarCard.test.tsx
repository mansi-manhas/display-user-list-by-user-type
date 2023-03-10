import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarCard from '../AvatarCard';

test('render AvatarCard', () => {
  render(<AvatarCard name={'John'} role={'manager'} />);
  const linkElement = screen.getByText('manager');
  expect(linkElement).toBeInTheDocument();
});
