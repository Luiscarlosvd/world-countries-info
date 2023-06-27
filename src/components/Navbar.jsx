import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';

const Navbar = ({ title }) => (
  <header className="flex justify-between px-6 fixed w-full items-center py-3 bg-blue-800">
    <div>
      <Link to="/"><IoIosArrowBack className="text-xl text-white mr-5" /></Link>
    </div>
    <h1 className="text-lg text-white text-lato-300 text-center">{title}</h1>
    <div className="flex gap-4">
      <BsFillMicFill className="text-xl text-white ml-1" />
      <IoMdSettings className="text-xl text-white" />
    </div>
  </header>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar;
