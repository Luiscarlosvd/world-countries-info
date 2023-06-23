import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountriesInfo } from '../redux/countries/countriesSlice';

const CountriesList = () => {
  const country = useSelector(state => state.countries)
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCountriesInfo());
  }, [dispatch]);

  return (
    <div>
      <h1>{country.countries[0].name}</h1>
      <img src={country.countries[0].flag} alt="League emblem image" />
    </div>
  )
}

export default CountriesList;
