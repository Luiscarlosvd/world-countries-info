import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import worldImg from '../assets/pngegg (4).png';
import { getCountriesInfo } from '../redux/countries/countriesSlice';

const CountriesList = () => {
  const country = useSelector(state => state.countries)
  const dispatch = useDispatch();

  useEffect(() => {
    if(country.countries.length === 0){
      dispatch(getCountriesInfo());
    }
  }, [dispatch, country.countries.length]);

  return (
    <div className='flex flex-col justify-center items-center'>
      {country.status === "Loading" && <div className='text-white'>Loading...</div>}
      {country.status === "fulfilled" && 
        <>
          <div>
            <img className="" src={worldImg} alt="Icon world map" />
          </div>
          <h1>{country.countries[0].name}</h1>
          <img src={country.countries[0].flag} alt="League emblem image" />
        </>
      }
    </div>
  )
}

export default CountriesList;
