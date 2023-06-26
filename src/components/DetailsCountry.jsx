import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getCountryDetails } from "../redux/countries/countriesSlice";
import { useSelector, useDispatch } from "react-redux";

const DetailsCountry = () => {
  const country = useSelector((state) => state.countries);
  const { countryName } = useParams();
  const [ currencies, setCurrencies ] = useState([]);
  const [ languages, setLanguages ] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryDetails(countryName));
  }, [dispatch, countryName]);

  useEffect(() => {
    if (country.detailsStatus === 'fulfilled') {
      if(country.countryDetails.currencies !== undefined) {
        const currencyKeys = Object.keys(country.countryDetails.currencies);
        setCurrencies(currencyKeys);
      }
      if(country.countryDetails.languages !== undefined ){
        const languagesKeys = Object.keys(country.countryDetails.languages);
        setLanguages(languagesKeys);
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

  const languageParagraph = (languageKeys) => {
    const languageDiv = languageKeys.map((key) => {
        if (country.countryDetails.languages !== undefined) {
            const language = country.countryDetails.languages[key];
            if(language){
                return <p className="text-white text-right" key={key}>{language}</p>;
            }
           return null;
        }
    });
    return languageDiv;
  };

  return (
    <>
        {country.detailsStatus === "Loading" && <div className='text-white text-xl align-middle h-screen text-center bg-blue-800'>Loading...</div>}
        {country.detailsStatus === "fulfilled" &&
            <div className="bg-blue-700 h-full">
                <div className="flex flex-col px-3 gap-4 items-center justify-between w-4/5 mx-auto py-12">
                    <img className="w-44 h-auto mt-10" src={country.countryDetails.flag} alt={`${country.name} flag image`} />
                    <h1 className="text-gray-200 text-right text-shadow text-lato-700 text-2xl">{country.countryDetails.official}</h1>
                </div>
                <div className="w-full bg-black bg-opacity-20">
                    <p className="ml-4 py-1 text-xs text-lato-400 text-white">COUNTRY INFORMATION - 2023</p>
                </div>
                <section className="w-full country-information">
                    <div className="flex justify-between p-5">
                        <p className="text-white text-lato-700">Capital</p>
                        <p className="text-white">{country.countryDetails.capital}</p>
                    </div>
                    <div className="flex justify-between p-5 items-center">
                        <p className="text-white text-lato-700 mr-5">Demonym</p>
                        <p className="text-white text-right">{country.countryDetails.demonyms}</p>
                    </div>
                    <div className="flex justify-between p-5">
                        <p className="text-white text-lato-700">Area</p>
                        <p className="text-white">{country.countryDetails.area} Km<sup>2</sup></p>
                    </div>
                    <div className="flex justify-between p-5">
                        <p className="text-white text-lato-700">Time Zones</p>
                        <p className="text-white">{country.countryDetails.timezones}</p>
                    </div>
                    <div className="flex justify-between p-5 h-auto items-center">
                        <p className="text-white text-lato-700">Language</p>
                        <div className="flex flex-col">
                           {languageParagraph(languages)} 
                        </div>
                    </div>
                    <div className="flex justify-between p-5 h-auto items-center">
                        <p className="text-white text-lato-700">Currencies</p>
                        <div className="flex flex-col">
                           {currencyParagraph(currencies)} 
                        </div>
                    </div>
                    <div className="flex justify-between p-5">
                        <p className="text-white text-lato-700">Map Location</p>
                        <a className="text-blue-200 underline" href={country.countryDetails.mapLocation}>Link to Google Maps</a>
                    </div>
                </section>
                
            </div>
        }
    </>

  )
}

export default DetailsCountry
