import { TableDetailBtn, TableDetailInfo, Wrapper } from "../../components";
import ArrowBack from "../../components/ui/ArrowBack";

const PendingDetail = () => {
  return (
    <Wrapper>
      <ArrowBack link={"/orderTracking/schedule"} />

      <TableDetailInfo status={"pending"} />
      <div className="mt-16 text-center">
        <TableDetailBtn>Assign Driver</TableDetailBtn>
      </div>
    </Wrapper>
  );
};
export default PendingDetail;
