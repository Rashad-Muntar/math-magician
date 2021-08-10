import React from 'react';
import App from '../component/App';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from '../component/Home';
import Navbar from '../component/Navbar';
import Quote from '../component/Quote';


jest.mock('../component/Home');
jest.mock('../component/Quote');
jest.mock('../component/Calculator');
jest.mock('../component/Navbar');


describe("Tests for App Router", () => {
    test("Should render page header and HomePage on default route", () => {
      // Arrange
      Navbar.mockImplementation(() => <div>Navbar</div>);
      Home.mockImplementation(() => <div>Home</div>);
  
      // Act
      render(
        <MemoryRouter>
          <App/>
        </MemoryRouter>
      );
  
      // Assert
      expect(screen.getByText("Navbar")).toBeInTheDocument();
      expect(screen.getByText("Home")).toBeInTheDocument();
    });
  
    test("Should render navbar and quote page for quote route", () => {
      // Arrange
      Navbar.mockImplementation(() => <div>Navbar</div>);
      Quote.mockImplementation(() => <div>Quote</div>);
  
      // Act
      render(
        <MemoryRouter initialEntries={['/quote/']}>
          <App/>
        </MemoryRouter>
      );
  
      // Assert
      expect(screen.getByText("Navbar")).toBeInTheDocument();
      expect(screen.getByText("Quote")).toBeInTheDocument();
    });
  
   
  });