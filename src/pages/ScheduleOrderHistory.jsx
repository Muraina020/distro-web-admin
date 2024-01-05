import { useLoaderData } from "react-router-dom";
import { DataTable, Wrapper } from "../components";
import { expressOrderHistoryColumn } from "../components/tableColumns/expressOrderHistoryColumn";
import { customFetch } from "../utils";

export const loader = async () => {
  const url = "/order-history/Schedule?pageSize=55";
  const response = await customFetch(url);
  const data = response.data;
  const content = data.content;

  return { content };
};

const ScheduleOrderHistory = () => {
  const { content } = useLoaderData();
  return (
    <Wrapper>
      <DataTable columns={expressOrderHistoryColumn} data={content} />
    </Wrapper>
  );
};
export default ScheduleOrderHistory;
