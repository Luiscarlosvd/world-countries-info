import { PiArrowCircleRightLight } from 'react-icons/pi'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = ({ name, flag, population }) => {
  return (
    <div className="flex text-right flex-col bg-blue-700 relative px-2 py-4 gap-8 items-center border border-blue-800 border-opacity-10y- justify-between">
      <Link className="absolute right-2 top-2" to={name}><PiArrowCircleRightLight className="text-3xl text-gray-200" /></Link>
      <div className="self-start ml-3">
        <img className="w-28 h-4-5 rounded-sm" src={flag} alt="Country image flag" />
      </div>
      <div className="self-end mr-3">
        <h2 className="text-white text-lg text-lato-700">{name}</h2>
        <p className="text-white text-sm text-lato-300">Population: {population}</p>
      </div>
      
    </div>
  )
}

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
};

export default CountryCard;
