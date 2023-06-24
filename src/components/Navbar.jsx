import { Link } from 'react-router-dom';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';

const Navbar = () => (
  <header className="flex justify-between px-6 items-center py-3 bg-blue-800">
    <div>
      <Link to="/"><IoIosArrowBack className="text-xl text-white mr-5" /></Link>
    </div>
    <h1 className="text-xl text-white text-lato-300">Countries Information</h1>
    <div className="flex gap-4">
      <BsFillMicFill className="text-xl text-white" />
      <IoMdSettings className="text-xl text-white" />
    </div>
  </header>
);

export default Navbar;
