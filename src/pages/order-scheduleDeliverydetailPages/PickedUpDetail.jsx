import { TableDetailBtn, TableDetailInfo, Wrapper } from "../../components";
import ArrowBack from "../../components/ui/ArrowBack";

const PickedUpDetail = () => {
  return (
    <Wrapper>
      <ArrowBack link={"/orderTracking/schedule"} />

      <TableDetailInfo status={"picked up"} />
      <div className="mt-20 text-center">
        <TableDetailBtn>Assign Driver</TableDetailBtn>
      </div>
    </Wrapper>
  );
};
export default PickedUpDetail;
