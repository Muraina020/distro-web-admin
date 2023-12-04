import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { TableDetailInfo, Wrapper } from "../../components";

const CancelDetail = () => {
  return (
    <Wrapper>
      <Link
        to={"/orderTracking"}
        className="rounded-box inline-block p-2 hover:bg-gray-50  ml-6  mt-5"
      >
        <GoArrowLeft className="text-3xl" />
      </Link>

      <TableDetailInfo status={"cancel"} />
    </Wrapper>
  );
};
export default CancelDetail;
