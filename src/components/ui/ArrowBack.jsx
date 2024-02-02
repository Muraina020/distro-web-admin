import { Link, useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const ArrowBack = ({ link }) => {
  const navigate = useNavigate();

  const goToPreviousRoute = () => {
    navigate(-1);
  };
  return (
    <button
      onClick={goToPreviousRoute}
      className="rounded-box inline-block p-2 hover:bg-gray-50  sm:ml-6 ml-2  mt-5"
    >
      <GoArrowLeft className="lg:text-3xl text-lg" />
    </button>
  );
};
export default ArrowBack;
