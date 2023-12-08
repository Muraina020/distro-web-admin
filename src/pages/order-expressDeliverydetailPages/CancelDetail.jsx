import { TableDetailInfo, Wrapper } from "../../components";
import ArrowBack from "../../components/ui/ArrowBack";

const CancelDetail = () => {
  return (
    <Wrapper>
      <ArrowBack link={"/orderTracking"} />

      <TableDetailInfo status={"cancel"} />
    </Wrapper>
  );
};
export default CancelDetail;
