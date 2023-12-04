import { Link } from "react-router-dom";
import { TableDetailBtn, TableDetailInfo, Wrapper } from "../../components";
import { GoArrowLeft } from "react-icons/go";

const PendingDetail = () => {
  return (
    <Wrapper>
      <Link
        to={"/orderTracking/schedule"}
        className="rounded-box inline-block p-2 hover:bg-gray-50  ml-6  mt-5"
      >
        <GoArrowLeft className="text-3xl" />
      </Link>
      <TableDetailInfo status={"pending"} />
      <div className="mt-16 text-center">
        <TableDetailBtn>Assign Driver</TableDetailBtn>
      </div>
    </Wrapper>
  );
};
export default PendingDetail;
