import { DataTable, TableLoading, Wrapper } from "../../components";
import { BlockedUsersColumn } from "../../components/tableColumns/BlockedUsersColumn";
import useCustomFetch from "../../hooks/useCustomFetch";

const Customers = () => {
  const { data: _data, loading } = useCustomFetch(
    `/customers/deactivated?PageSize=${Infinity}`
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
      <DataTable columns={BlockedUsersColumn} filter={true} data={data} />
    </Wrapper>
  );
};
export default Customers;
