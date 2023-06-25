import { useParams } from "react-router";
import Navbar from "./Navbar";

const DetailsCountry = () => {
  const { countryName } = useParams()
  return (
    <>
        <Navbar title={`${countryName}`} />
        <div>
            Hello I'm Details
        </div>
    </>
  )
}

export default DetailsCountry
