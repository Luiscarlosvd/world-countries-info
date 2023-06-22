import { NavLink } from "react-router-dom";

const Navbar = () => (
  <header className="flex justify-between px-16 items-center py-4 mb-8 border border-b-2 bg-blue-800">
    <div className="flex items-center gap-5">
      <h1 className="text-2xl text-white">Football Standings</h1>
    </div>
    <ul className="flex gap-5 text-blue-500">
      <li>
        <NavLink to="/">
          Rockets
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Navbar;
