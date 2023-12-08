import { Link } from "react-router-dom";
import { TableDetailBtn, TableDetailInfo, Wrapper } from "../../components";
import { GoArrowLeft } from "react-icons/go";
import ArrowBack from "../../components/ui/ArrowBack";

const OnTheWayDetail = () => {
  return (
    <Wrapper>
      <ArrowBack link={"/orderTracking"} />

      <TableDetailInfo status={"on the way"} />

      <div className="mt-8 grid place-content-center py-8">
        <Link to={"/exprees_order pending_asign-drivers"}>
          <TableDetailBtn>Message Driver</TableDetailBtn>
        </Link>
      </div>
    </Wrapper>
  );
};
export default OnTheWayDetail;
