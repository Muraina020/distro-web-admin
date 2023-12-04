import { Link } from "react-router-dom";
import { TableDetailInfo, Wrapper } from "../../components";
import { GoArrowLeft } from "react-icons/go";

const CancelDetail = () => {
  return (
    <Wrapper>
      <Link
        to={"/orderTracking/schedule"}
        className="rounded-box inline-block p-2 hover:bg-gray-50  ml-6  mt-5"
      >
        <GoArrowLeft className="text-3xl" />
      </Link>
      <TableDetailInfo status={"cancel"} />
    </Wrapper>
  );
};
export default CancelDetail;
