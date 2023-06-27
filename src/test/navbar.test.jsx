import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('renders title', () => {
    // Arrange
    const title = 'Test Title';

    // Act
    const { container } = render(<BrowserRouter><Navbar title={title} /></BrowserRouter>);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
