import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import CountryCard from '../components/CountryCard';

describe('CountryCard', () => {
  test('renders country name and population without errors', () => {
    // Arrange
    const name = 'Venezuela';
    const population = 3028384;
    const flag = 'test-venezuela-flag.png';

    // Act
    render(<BrowserRouter><CountryCard name={name} flag={flag} population={population} /></BrowserRouter>);

    // Assert
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(`Population: ${population}`)).toBeInTheDocument();
  });
  test('renders link to details page correctly', () => {
    // Arrange
    const name = 'Argentina';
    const population = 4568995;
    const flag = 'argentina.png'
    const link = `/details/${name}`;

    // Act
    render(
      <BrowserRouter>
        <CountryCard name={name} flag={flag} population={population} />
      </BrowserRouter>
    );

    // Assert
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', link);
  });
});