import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Wrapper } from "../../components";

const miniNavlink = [
  { text: "Express Delivery", path: "/orderTracking" },
  { text: "Schedule Delivery", path: "/orderTracking/schedule" },
];

const OrderSharedLayout = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <nav className="text-center grid grid-cols-2 border-b border-graylight/90">
        {miniNavlink.map((navtext, i) => {
          const isActive = location.pathname === navtext.path;

          return (
            <NavLink
              to={navtext.path}
              key={i}
              className={`relative uppercase  py-2 lg:text-[1.2625rem] text-[.9rem] leading-[2.08444rem] ${
                isActive ? "text-primary-default" : " text-graylight"
              }`}
            >
              {navtext.text}
              {isActive && (
                <span className="absolute w-full h-[2px] bg-primary-default left-0 top-full" />
              )}
            </NavLink>
          );
        })}
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default OrderSharedLayout;
