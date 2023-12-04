import { useState } from "react";
import {
  expreesCancelTableData,
  expreesPendingTableData,
  orderStatusNavText,
} from "../../utils/data";
import { DataTable } from "../../components";

import { pendingScheduleColumn } from "../../components/tableColumns/pendingScheduleColumn";
import { pickedUpScheduleColumn } from "../../components/tableColumns/pickedUpScheduleColumn";
import { onTheWayScheduleColumn } from "../../components/tableColumns/onTheWaySchedule";
import { deliveredScheduleColumn } from "../../components/tableColumns/deliveredScheduleColumn";
import { cancelScheduleColumn } from "../../components/tableColumns/cancelScheduleColumn";

const OrderScheduleDelivery = () => {
  const [selectedTextTable, setSelectedTextTable] = useState("Pending");

  const table = {
    Pending: (
      <DataTable
        columns={pendingScheduleColumn}
        data={expreesPendingTableData}
      />
    ),
    "picked UP": (
      <DataTable
        columns={pickedUpScheduleColumn}
        data={expreesPendingTableData}
      />
    ),
    "On The way": (
      <DataTable
        columns={onTheWayScheduleColumn}
        data={expreesPendingTableData}
      />
    ),

    Delivered: (
      <DataTable
        columns={pendingScheduleColumn}
        data={expreesPendingTableData}
      />
    ),
    Delivered: (
      <DataTable
        columns={deliveredScheduleColumn}
        data={expreesPendingTableData}
      />
    ),
    Canceled: (
      <DataTable columns={cancelScheduleColumn} data={expreesCancelTableData} />
    ),
  };

  const color = {
    Pending: "#00A69C",
    "picked UP": "#46B04C",
    "On The way": "#F9BF42",
    Delivered: "#2593F0",
    Canceled: "#FF3838",
  };

  return (
    <>
      <ul className="flex items-center border-b ">
        {orderStatusNavText.map((text) => {
          return (
            <li key={text} className="relative text-center w-full ">
              <button
                style={{
                  color: selectedTextTable === text && color[selectedTextTable],
                }}
                onClick={() => setSelectedTextTable(text)}
                className={`uppercase  text-[1.125rem] w-full py-3   text-graylight`}
              >
                {text}
              </button>
              {selectedTextTable === text && (
                <span
                  style={{
                    background:
                      selectedTextTable === text && color[selectedTextTable],
                  }}
                  className="absolute left-0 top-full  w-full h-[0.125rem]"
                />
              )}
            </li>
          );
        })}
      </ul>
      <div>{selectedTextTable && table[selectedTextTable]}</div>
    </>
  );
};
export default OrderScheduleDelivery;
