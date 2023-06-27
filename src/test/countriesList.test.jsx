import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CountriesList from '../components/CountriesList';

const customMiddleware = [thunk]
const mockStore = configureMockStore(customMiddleware);

describe('CountriesList', () => {
  test('renders loading state', () => {
    // Arrange
    const store = mockStore({
      countries: {
        status: 'Loading',
        countries: [],
        region: 'Europe',
      },
    });

    // Act
    render(
      <Provider store={store}>
        <CountriesList />
      </Provider>
    );

    // Assert
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  test('renders countries list correctly', () => {
    // Arrange
    const store = mockStore({
        countries: {
          status: 'fulfilled',
          countries: [
            {
              name: 'Argentina',
              flag: 'https://restcountries.com/data/arg.svg',
              population: 44938712,
              region: 'Americas',
            },
            {
              name: 'Brazil',
              flag: 'https://restcountries.com/data/bra.svg',
              population: 206135893,
              region: 'Americas',
            },
            ],
          region: 'Americas',
        },
    });

    // Act
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter>
            <CountriesList />
        </BrowserRouter>
      </Provider>
    );

    // Assert
    expect(container).toMatchSnapshot();
  });
});