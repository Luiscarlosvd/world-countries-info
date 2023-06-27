import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { describe, it, expect } from 'vitest';
import DetailsCountry from '../components/DetailsCountry';
import { BrowserRouter } from 'react-router-dom';

const customMiddleware = [thunk]
const mockStore = configureMockStore(customMiddleware);

describe('DetailsCountry', () => {
  it('should render country details when detailsStatus is fulfilled', () => {
    const store = mockStore({
      countries: {
        detailsStatus: 'fulfilled',
        countryDetails: {
          flag: 'https://restcountries.com/data/usa.svg',
          official: 'United States of America',
          capital: 'Washington, D.C.',
          demonyms: 'American',
          area: 9629091,
          timezones: ['UTC-12:00', 'UTC-11:00'],
          languages: {
            eng: 'English',
            spa: 'Spanish',
          },
          currencies: {
            USD: {
              name: 'United States dollar',
              symbol: '$',
            },
          },
          mapLocation: 'https://www.google.com/maps/place/USA',
        },
      },
    });

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
            <DetailsCountry />
        </BrowserRouter>
      </Provider>
    );
    
    expect(container).toMatchSnapshot();
  });
});