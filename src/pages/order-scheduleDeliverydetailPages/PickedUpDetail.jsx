import { Link } from "react-router-dom";
import { TableDetailBtn, TableDetailInfo, Wrapper } from "../../components";
import { GoArrowLeft } from "react-icons/go";

const PickedUpDetail = () => {
  return (
    <Wrapper>
      <Link
        to={"/orderTracking/schedule"}
        className="rounded-box inline-block p-2 hover:bg-gray-50  ml-6  mt-5"
      >
        <GoArrowLeft className="text-3xl" />
      </Link>
      <TableDetailInfo status={"picked up"} />
      <div className="mt-20 text-center">
        <TableDetailBtn>Assign Driver</TableDetailBtn>
      </div>
    </Wrapper>
  );
};
export default PickedUpDetail;
