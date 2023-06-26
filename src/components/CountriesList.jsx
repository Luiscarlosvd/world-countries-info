import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { changeRegion } from '../redux/countries/countriesSlice';
import worldImg from '../assets/pngegg (4).png';
import { getCountriesInfo } from '../redux/countries/countriesSlice';
import CountryCard from './CountryCard';

const CountriesList = () => {
  const country = useSelector(state => state.countries);
  const [ valueSearch, setValueSearch ] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if(country.countries.length === 0){
      dispatch(getCountriesInfo());
    }
  }, [dispatch, country.countries.length]);

  const displayCountriesByRegion = country.countries.filter((countries) => {
    return countries.region === country.region}
  ).filter((country) => {
    if(valueSearch === '') {
      return country
    } else {
      return country.name.includes(valueSearch);
    }
  });

  const handleChange = (e) => {
    dispatch(changeRegion(e.target.value));
  }

  const handleSearchValue = (e) => {
    const value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();
    setValueSearch(value);
  }

  const totalPopulation = () => {
    let total = 0;
    displayCountriesByRegion.map((country) => {
      total += country.population;
    })
    return total;
  }

  return (
    <main className='flex flex-col justify-center items-center'>
      {country.status === "Loading" && <div className='text-white'>Loading...</div>}
      {country.status === "fulfilled" && 
        <>
          <div>
            <img src={worldImg} alt="Icon world map" />
          </div>
          <div className="w-2/3">
            <input className="text-lato-400 search-bar text-white bg-black bg-opacity-30 mt-4 rounded-md p-1 px-3 w-full" type="search" onChange={handleSearchValue} placeholder="Search country"/>
          </div>
          <div className="flex text-lato-400 items-center gap-2 mt-4">
            <p className="text-white" htmlFor="region">Region</p>
            <select name="region" className="text-white rounded-md bg-opacity-25 bg-black p-1 pr-7 text-lato-400" onChange={handleChange}>
              <option value="Europe">Europe</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Oceania">Oceania</option>
              <option value="Africa">Africa</option>
              <option value="Antarctic">Antarctic</option>
            </select>
          </div>
          <div className="text-center mt-4 text-white">
            <p>Total Population of {country.region}:</p>
            <p>{totalPopulation()}</p>
          </div>
          <div className="mt-6 w-full bg-black bg-opacity-10">
            <p className="ml-4 py-1 text-sm text-lato-400 text-white">STATS BY COUNTRY</p>
          </div>
          <section className='grid grid-cols-2 w-full bg-blue-800'>
            {displayCountriesByRegion.map((country) => (
              <CountryCard
                key={country.name}
                name={country.name}
                flag={country.flag}
                population={country.population}
              />
            ))}
          </section>
        </>
      }
    </main>
  )
}

export default CountriesList;
