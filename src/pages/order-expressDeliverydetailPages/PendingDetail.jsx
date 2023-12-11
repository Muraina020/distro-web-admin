import { Link } from "react-router-dom";
import { TableDetailBtn, TableDetailInfo, Wrapper } from "../../components";
import ArrowBack from "../../components/ui/ArrowBack";

const PendingDetail = () => {
  return (
    <Wrapper>
      <ArrowBack link={"/orderTracking"} />

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
