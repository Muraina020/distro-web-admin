import { DataTable, TableLoading, Wrapper } from "../../components";
import { BlockedDriversColumn } from "../../components/tableColumns/BlockedDrivers";
import useCustomFetch from "../../hooks/useCustomFetch";

const Drivers = () => {
  const { data: _data, loading } = useCustomFetch(
    `/drivers/deactivated?PageSize=1000${Infinity}`
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
      <DataTable columns={BlockedDriversColumn} filter={true} data={data} />
    </Wrapper>
  );
};
export default Drivers;
