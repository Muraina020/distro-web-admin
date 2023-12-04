import { Link } from "react-router-dom";
import { TableDetailBtn, TableDetailInfo, Wrapper } from "../../components";
import { GoArrowLeft } from "react-icons/go";

const PendingDetail = () => {
  return (
    <Wrapper>
      <Link
        to={"/orderTracking"}
        className="rounded-box inline-block p-2 hover:bg-gray-50  ml-6  mt-5"
      >
        <GoArrowLeft className="text-3xl" />
      </Link>

      <TableDetailInfo status={"pending"} />

      <div className="mt-8 grid place-content-center py-8">
        <Link to={"/exprees_order pending_asign-drivers"}>
          <TableDetailBtn>Assign Driver</TableDetailBtn>
        </Link>
      </div>
    </Wrapper>
  );
};
export default PendingDetail;
