import { useLoaderData } from "react-router-dom";
import { TableDetailInfo, Wrapper } from "../../components";
import ArrowBack from "../../components/ui/ArrowBack";
import { customFetch } from "../../utils";

export const loader = async ({ params }) => {
  const response = await customFetch(`pickuporders/${params.id}`);
  const data = response.data;
  return { data };
};

const orderDetails = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <Wrapper>
      <ArrowBack link={"/orderTracking"} />

      <TableDetailInfo status={"cancel"} />
    </Wrapper>
  );
};
export default orderDetails;
