import { useState } from "react";
import { DataTable } from "../../components";

import { pendingExpressColumn } from "../../components/tableColumns/PendingExpressColumn";
import { pickedUpExpressColumn } from "../../components/tableColumns/pickedUpExpressColumn";
import { onTheWayExpressColumn } from "../../components/tableColumns/onTheWayExpressColumn";
import { deliveredExpressColumn } from "../../components/tableColumns/deliveredExpressColumn";
import { cancelExpressColumn } from "../../components/tableColumns/cancelExpressColumn";
import {
  expreesCancelTableData,
  expreesPendingTableData,
  orderStatusNavText,
} from "../../utils/data";

const OrderExpressDelivery = () => {
  const [selectedTextTable, setSelectedTextTable] = useState("Pending");

  const table = {
    Pending: (
      <DataTable
        columns={pendingExpressColumn}
        data={expreesPendingTableData}
      />
    ),
    "picked UP": (
      <DataTable
        columns={pickedUpExpressColumn}
        data={expreesPendingTableData}
      />
    ),
    "On The way": (
      <DataTable
        columns={onTheWayExpressColumn}
        data={expreesPendingTableData}
      />
    ),

    Delivered: (
      <DataTable
        columns={pendingExpressColumn}
        data={expreesPendingTableData}
      />
    ),
    Delivered: (
      <DataTable
        columns={deliveredExpressColumn}
        data={expreesPendingTableData}
      />
    ),
    Canceled: (
      <DataTable columns={cancelExpressColumn} data={expreesCancelTableData} />
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
export default OrderExpressDelivery;
