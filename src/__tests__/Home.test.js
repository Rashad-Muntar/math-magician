import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../component/Home';


describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('Renders Quote component', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders Home correctly', () => {
    expect(screen.getByText(/WE LOVE MATH/)).toBeInTheDocument();
  });

  test('renders only the home page', () => {
    expect(screen.queryByText(/Quote of the day/)).not.toBeInTheDocument();
  });
});
