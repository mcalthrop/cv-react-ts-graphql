import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('should render app text', () => {
    render(<App />);
    const textElement = screen.getByText(/CV: Matt Calthrop/);
    expect(textElement).toBeInTheDocument();
  });
});
