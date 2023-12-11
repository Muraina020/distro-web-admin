import { NavLink, useLocation } from "react-router-dom";

const SidebarNavLink = ({ path, text, activeIcon, inActiveIcon }) => {
  const activePath = useLocation().pathname;

  return (
    <li className="text-[1.1rem] font-[300]">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? "nav__link active_link" : "nav__link"
        }
      >
        {activePath === path ? activeIcon : inActiveIcon}

        {text}
      </NavLink>
    </li>
  );
};
export default SidebarNavLink;
