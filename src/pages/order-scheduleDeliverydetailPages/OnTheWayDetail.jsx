import { TableDetailBtn, TableDetailInfo, Wrapper } from "../../components";
import ArrowBack from "../../components/ui/ArrowBack";

const OnTheWayDetail = () => {
  return (
    <Wrapper>
      <ArrowBack link={"/orderTracking/schedule"} />

      <TableDetailInfo status={"on the way"} />

      <div className="mt-20 text-center">
        <TableDetailBtn>Assign Driver</TableDetailBtn>
      </div>
    </Wrapper>
  );
};
export default OnTheWayDetail;
