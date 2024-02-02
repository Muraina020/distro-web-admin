import { DataTable, TableLoading, Wrapper } from "../components";
import { expressOrderHistoryColumn } from "../components/tableColumns/expressOrderHistoryColumn";
import useCustomFetch from "../hooks/useCustomFetch";

const url = "/order-history/Schedule?pageSize=55";

const ScheduleOrderHistory = () => {
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
export default ScheduleOrderHistory;
