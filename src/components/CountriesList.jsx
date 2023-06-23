import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeRegion } from '../redux/countries/countriesSlice';
import worldImg from '../assets/pngegg (4).png';
import { getCountriesInfo } from '../redux/countries/countriesSlice';
import CountryCard from './CountryCard';

const CountriesList = () => {
  const country = useSelector(state => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if(country.countries.length === 0){
      dispatch(getCountriesInfo());
    }
  }, [dispatch, country.countries.length]);

  const displayCountriesByRegion = country.countries.filter((countries) => countries.region === country.region);

  const handleChange = (e) => {
    dispatch(changeRegion(e.target.value));
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      {country.status === "Loading" && <div className='text-white'>Loading...</div>}
      {country.status === "fulfilled" && 
        <>
          <div>
            <img className="" src={worldImg} alt="Icon world map" />
          </div>
          <select onChange={handleChange}>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Africa">Africa</option>
            <option value="Antarctic">Antarctic</option>
          </select>
          <div className='grid grid-cols-2 mt-8 w-full'>
            {displayCountriesByRegion.map((country) => (
              <CountryCard
                key={country.name}
                name={country.name}
                flag={country.flag}
              />
            ))}
          </div>
        </>
      }
    </div>
  )
}

export default CountriesList;
