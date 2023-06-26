import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getCountryDetails } from "../redux/countries/countriesSlice";
import { useSelector, useDispatch } from "react-redux";

const DetailsCountry = () => {
  const country = useSelector((state) => state.countries);
  const { countryName } = useParams();
  const [ currencies, setCurrencies ] = useState([]);
  const filteredCountry = country.countries.find((country) => country.name === countryName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryDetails(filteredCountry.officialName));
    console.log(country.countryDetails)
  }, [dispatch, countryName]);

  useEffect(() => {
    if (country.detailsStatus === 'fulfilled') {
      if(country.countryDetails.currencies !== undefined && country.countryDetails.currencies !== null) {
        const currencyKeys = Object.keys(country.countryDetails.currencies);
        setCurrencies(currencyKeys);
      }
    }
  }, [country.detailsStatus, countryName]);

  const currencyParagraph = (currencyKeys) => {
    const currencyDiv = currencyKeys.map((key) => {
        if (country.countryDetails.currencies !== undefined) {
            const currency = country.countryDetails.currencies[key];
            if(currency){
                return <p className="text-white text-right" key={key}>{currency.name} {currency.symbol}</p>;
            }
           return null;
        }
    });
    return currencyDiv;
  };

  return (
    <>
        {country.detailsStatus === "Loading" && <div className='text-white text-xl align-middle h-screen text-center bg-blue-800'>Loading...</div>}
        {country.detailsStatus === "fulfilled" &&
            <div className="bg-blue-700 h-screen">
                <div className="flex flex-col px-3 gap-4 items-center justify-between w-4/5 mx-auto py-12">
                    <img className="w-44 h-auto" src={filteredCountry.flag} alt={`${country.name} flag image`} />
                    <h1 className="text-gray-200 text-right text-shadow text-lato-700 text-2xl">{filteredCountry.officialName}</h1>
                </div>
                <div className="w-full bg-black bg-opacity-20">
                    <p className="ml-4 py-1 text-xs text-lato-400 text-white">COUNTRY INFORMATION - 2023</p>
                </div>
                <section className="w-5/6 m-auto">
                    <div className="flex justify-between my-3">
                        <p className="text-white text-lato-400">Capital</p>
                        <p className="text-white">{country.countryDetails.capital}</p>
                    </div>
                    <div className="flex justify-between my-3 items-center">
                        <p className="text-white text-lato-400 mr-5">Demonym</p>
                        <p className="text-white text-right">{country.countryDetails.demonyms}</p>
                    </div>
                    <div className="flex justify-between my-3">
                        <p className="text-white text-lato-400">Area</p>
                        <p className="text-white">{country.countryDetails.area} Km<sup>2</sup></p>
                    </div>
                    <div className="flex justify-between my-3">
                        <p className="text-white text-lato-400">Time Zones</p>
                        <p className="text-white">{country.countryDetails.timezones}</p>
                    </div>
                    <div className="flex justify-between my-3">
                        <p className="text-white text-lato-400">Map Location</p>
                        <a className="text-blue-200 underline" href={country.countryDetails.mapLocation}>Link to Google Maps</a>
                    </div>
                    <div className="flex justify-between my-3 h-auto items-center">
                        <p className="text-white text-lato-400">Currencies</p>
                        <div className="flex flex-col">
                           {currencyParagraph(currencies)} 
                        </div>
                    </div>
                </section>
                
            </div>
        }
    </>

  )
}

export default DetailsCountry
