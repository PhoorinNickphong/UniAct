import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './signin';
import { Axios } from "axios";

jest.mock('axios', () => ({ 
  useNavigate: jest.fn()
}))


test('singin', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/);
  expect(linkElement).toBeInTheDocument();
});

test('singin', () => {
  render(<App />);
  const linkElement = screen.getByText(/signin with @psu.ac.th account/);
  expect(linkElement).toBeInTheDocument();
});
