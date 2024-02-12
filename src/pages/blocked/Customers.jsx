import { DataTable, TableLoading, Wrapper } from "../../components";
import { expressOrderHistoryColumn } from "../../components/tableColumns/expressOrderHistoryColumn";
import useCustomFetch from "../../hooks/useCustomFetch";

const Customers = () => {
  const { data: _data, loading } = useCustomFetch(
    "/customers/deactivated?PageSize=1000"
  );

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
export default Customers;
