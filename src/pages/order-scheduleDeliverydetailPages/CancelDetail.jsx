import { Link } from "react-router-dom";
import { TableDetailInfo, Wrapper } from "../../components";
import { GoArrowLeft } from "react-icons/go";
import ArrowBack from "../../components/ui/ArrowBack";

const CancelDetail = () => {
  return (
    <Wrapper>
      <ArrowBack link={"/orderTracking/schedule"} />

      <TableDetailInfo status={"cancel"} />
    </Wrapper>
  );
};
export default CancelDetail;
