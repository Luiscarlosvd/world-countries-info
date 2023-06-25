import { useParams } from "react-router";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const DetailsCountry = () => {
  const countriesArr = useSelector((state) => state.countries) 
  const { countryName } = useParams()
  const country = countriesArr.countries.find((country) => country.name === countryName)

  return (
    <>
        <Navbar title={`${countryName}`} />
        <div className="bg-blue-800 h-screen">
            <div className="flex flex-col px-3 gap-4 items-center justify-between w-4/5 mx-auto py-14">
                <img className="w-44 h-auto" src={country.flag} alt={`${country.name} flag image`} />
                <h1 className="text-gray-200 text-right text-shadow text-lato-700 text-2xl">{country.name}</h1>
            </div>
            <div>
                <p>COUNTRY INFORMATION</p>
            </div>
        </div>
    </>
  )
}

export default DetailsCountry
