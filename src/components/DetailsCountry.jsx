import { useParams } from "react-router";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { getCountryDetails } from "../redux/countries/countriesSlice";
import { useSelector, useDispatch } from "react-redux";

const DetailsCountry = () => {
  const countriesArr = useSelector((state) => state.countries); 
  const { countryName } = useParams();
  const dispatch = useDispatch()
  const country = countriesArr.countries.find((country) => country.name === countryName);
  
  useEffect(() => {
    dispatch(getCountryDetails(country.officialName));
  }, [dispatch]);

  return (
    <>
        <Navbar title={`${countryName}`} />
        <div className="bg-blue-800 h-screen">
            <div className="flex flex-col px-3 gap-4 items-center justify-between w-4/5 mx-auto py-12">
                <img className="w-44 h-auto" src={country.flag} alt={`${country.name} flag image`} />
                <h1 className="text-gray-200 text-right text-shadow text-lato-700 text-2xl">{country.officialName}</h1>
            </div>
            <div className="w-full bg-black bg-opacity-10">
                <p className="ml-4 py-1 text-xs text-lato-400 text-white">COUNTRY INFORMATION - 2023</p>
            </div>
        </div>
    </>
  )
}

export default DetailsCountry
