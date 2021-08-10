
import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonPanel from '../component/ButtonPanel';

const clickHandler = () => ({ total: '', next: '', operation: '' });

describe('ButtonPanel', () => {
  beforeEach(() => {
    render(<ButtonPanel clickHandler={clickHandler} />);
  });

  test('renders ButtonPanel correctly', () => {
    expect(screen.getByText(/=/)).toBeInTheDocument();
  });

  test('renders only the ButtonPanel component', () => {
    expect(screen.queryByText(/Quote of the day/)).not.toBeInTheDocument();
  });
});