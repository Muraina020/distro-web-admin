import { DataTable, TableLoading, Wrapper } from "../components";
import { expressOrderHistoryColumn } from "../components/tableColumns/expressOrderHistoryColumn";
import useCustomFetch from "../hooks/useCustomFetch";

const url = "/order-history/Express?pageSize=100";

const ExpressOrderHistory = () => {
  const { data: _data, loading } = useCustomFetch(url);
  const data = _data?.content || [];

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
