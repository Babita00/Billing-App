import { NavLink } from "react-router-dom";

 const HeaderPage=() =>{
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-2 ">
        <img src="/logo.svg" alt="Logo" className="h-15 w-25" />
        
      </div>

      <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-teal-500" : "hover:text-gray-500"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-teal-500" : "hover:text-gray-500"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/feature"
            className={({ isActive }) =>
              isActive ? "text-teal-500" : "hover:text-gray-500"
            }
          >
            Feature
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "text-teal-500" : "hover:text-gray-500"
            }
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive ? "text-teal-500" : "hover:text-gray-500"
            }
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-teal-500" : "hover:text-gray-500"
            }
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/main"
            className={({ isActive }) =>
              isActive ? "text-teal-500" : "hover:text-gray-500"
            }
          >
            Main
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-teal-500 font-medium"
              : "text-gray-800 hover:text-gray-500"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="bg-teal-400 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:bg-teal-500"
        >
          Start For Free
        </NavLink>
      </div>
    </nav>
  );
}
export default HeaderPage