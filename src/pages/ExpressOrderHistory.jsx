import { DataTable, TableLoading, Wrapper } from "../components";
import { expressOrderHistoryColumn } from "../components/tableColumns/expressOrderHistoryColumn";
import useCustomFetch from "../hooks/useCustomFetch";

const url = "/order-history/Express?pageSize=55";

const ExpressOrderHistory = () => {
  const { data, loading } = useCustomFetch(url);

  if (loading) {
    return (
      <Wrapper>
        <TableLoading />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <DataTable columns={expressOrderHistoryColumn} data={data} />
    </Wrapper>
  );
};
export default ExpressOrderHistory;
