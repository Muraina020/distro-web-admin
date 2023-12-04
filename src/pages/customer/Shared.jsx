import { Link, Outlet } from "react-router-dom";

const Shared = () => {
  return (
    <div>
      <ul className="p-4">
        <Link to="/test">test1</Link>
        <Link to="test2">test2</Link>
      </ul>
      <Outlet />
    </div>
  );
};
export default Shared;
