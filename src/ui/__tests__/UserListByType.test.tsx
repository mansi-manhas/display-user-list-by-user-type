import React from 'react';
import { render, screen } from '@testing-library/react';
import UserListByType from '../UserListByType';

test('render UserListByType', () => {
  render(<UserListByType title={'admin'} userList={[{ name: 'John', role: 'admin' }]}  />);
  const linkElement = screen.getByText('John');
  expect(linkElement).toBeInTheDocument();
});
