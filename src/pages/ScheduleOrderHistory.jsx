import { DataTable, Wrapper } from "../components";
import { expressOrderHistoryColumn } from "../components/tableColumns/expressOrderHistoryColumn";
import { expreesCancelTableData } from "../utils/data";

const ScheduleOrderHistory = () => {
  return (
    <Wrapper>
      <DataTable
        columns={expressOrderHistoryColumn}
        data={expreesCancelTableData}
      />
    </Wrapper>
  );
};
export default ScheduleOrderHistory;
