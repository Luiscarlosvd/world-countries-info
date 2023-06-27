import { render } from '@testing-library/react';
import Footer from '../components/Footer';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Footer', () => {
  it('should render the footer correctly', () => {
    const { container } = render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});