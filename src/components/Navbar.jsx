import { Link } from 'react-router-dom';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';

const Navbar = () => (
  <header className="flex justify-between px-6 items-center py-3 mb-8 border border-b-2 bg-blue-800">
    <div>
      <Link to="/"><IoIosArrowBack className="text-xl text-white mr-5" /></Link>
    </div>
    <h1 className="text-xl text-white text-lato-300">Leagues</h1>
    <div className="flex gap-4">
      <IoMdSettings className="text-xl text-white" />
      <BsFillMicFill className="text-xl text-white" />
    </div>
  </header>
);

export default Navbar;
