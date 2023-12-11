import { TableDetailInfo, Wrapper } from "../../components";
import ArrowBack from "../../components/ui/ArrowBack";

const DeliveredDetail = () => {
  return (
    <Wrapper>
      <ArrowBack link={"/orderTracking/schedule"} />

      <TableDetailInfo status={"delivered"} />
    </Wrapper>
  );
};
export default DeliveredDetail;
