import { useEffect } from "react";
import { DataTable, Wrapper } from "../components";
import { expressOrderHistoryColumn } from "../components/tableColumns/expressOrderHistoryColumn";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const url = "/order-history/Express?pageSize=55";
  const response = await customFetch(url);
  const data = response.data;
  const content = data.content;

  return { content };
};

const ExpressOrderHistory = () => {
  const { content } = useLoaderData();

  return (
    <Wrapper>
      <DataTable columns={expressOrderHistoryColumn} data={content} />
    </Wrapper>
  );
};
export default ExpressOrderHistory;
