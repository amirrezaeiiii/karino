import { NavLink } from "react-router-dom";

function CustomNavLink({ children, to }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
            isActive
              ? "bg-primary-900/80 text-white font-medium"
              : "text-secondary-700 hover:bg-primary-600/30 hover:text-secondary-800"
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavLink;
