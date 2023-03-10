import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioGroup from '../RadioGroup';

test('render RadioGroup', () => {
  render(<RadioGroup userTypes={['admin', 'manager']} changed={() => console.log('')} selectedValue={'admin'} />);
  const linkElement = screen.getByText('admin');
  expect(linkElement).toBeInTheDocument();
});
