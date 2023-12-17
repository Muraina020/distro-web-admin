import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const ArrowBack = ({ link }) => {
  return (
    <Link
      to={link}
      className="rounded-box inline-block p-2 hover:bg-gray-50  sm:ml-6 ml-2  mt-5"
    >
      <GoArrowLeft className="lg:text-3xl text-lg" />
    </Link>
  );
};
export default ArrowBack;
