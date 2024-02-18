import { Link } from "react-router-dom";

const TableDetailBtn = ({ children, link }) => {
  return (
    <Link
      to={link}
      className="rounded-[0.625rem]  lg:px-[1rem] px-[1rem] py-[0.6875rem]  text-[1rem] bg-primary-default text-white transition active:scale-95 hover:bg-primary-default/70"
    >
      {children}
    </Link>
  );
};

export default TableDetailBtn;
