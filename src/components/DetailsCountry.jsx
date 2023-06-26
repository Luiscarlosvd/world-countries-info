import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getCountryDetails } from "../redux/countries/countriesSlice";
import { useSelector, useDispatch } from "react-redux";

const DetailsCountry = () => {
  const country = useSelector((state) => state.countries);
  const { countryName } = useParams();
  const filteredCountry = country.countries.find((country) => country.name === countryName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryDetails(filteredCountry.officialName));
    console.log(country.countryDetails)
  }, [dispatch, countryName]);

  return (
    <>
        <Navbar title={`${countryName}`} />
        {country.status === "Loading" && <div className='text-white'>Loading...</div>}
        {country.status === "fulfilled" &&
            <div className="bg-blue-800 h-screen">
                <div className="flex flex-col px-3 gap-4 items-center justify-between w-4/5 mx-auto py-12">
                    <img className="w-44 h-auto" src={filteredCountry.flag} alt={`${country.name} flag image`} />
                    <h1 className="text-gray-200 text-right text-shadow text-lato-700 text-2xl">{filteredCountry.officialName}</h1>
                </div>
                <div className="w-full bg-black bg-opacity-10">
                    <p className="ml-4 py-1 text-xs text-lato-400 text-white">COUNTRY INFORMATION - 2023</p>
                </div>
                <section className="w-5/6 m-auto">
                    <div className="flex justify-between my-3">
                        <p className="text-white text-lato-400">Time Zones</p>
                        <p className="text-white">{country.countryDetails[0].timezones}</p>
                    </div>
                    <div className="flex justify-between my-3">
                        <p className="text-white text-lato-400">Capital</p>
                        <p className="text-white">{country.countryDetails[0].capital}</p>
                    </div>
                </section>
                
            </div>
        }
    </>

  )
}

export default DetailsCountry
