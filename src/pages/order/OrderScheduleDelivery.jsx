import { useState, useEffect } from "react";
import { orderStatusNavText } from "../../utils/data";
import { DataTable } from "../../components";

import { customFetch } from "../../utils";
import Loading from "../../components/ui/Loading";
import { orderColumn } from "../../components/tableColumns/OrderTable";

const OrderScheduleDelivery = () => {
  const [selectedTextTable, setSelectedTextTable] = useState("Pending");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await customFetch(
          `/orders/all?deliveryStatus=${selectedTextTable}&deliveryType=Schedule`
        );
        setData(response.data.content);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTextTable]);

  const table = {
    Pending: <DataTable columns={orderColumn} data={data} />,

    "Picked up": <DataTable columns={orderColumn} data={data} />,

    "On the way": <DataTable columns={orderColumn} data={data} />,

    Delivered: <DataTable columns={orderColumn} data={data} />,
    Delivered: <DataTable columns={orderColumn} data={data} />,
    Canceled: <DataTable columns={orderColumn} data={data} />,
  };

  const color = {
    Pending: "#00A69C",
    "Picked up": "#46B04C",
    "On the way": "#F9BF42",
    Delivered: "#2593F0",
    Canceled: "#FF3838",
  };

  if (loading) {
    return <Loading />;
  }

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
                className={`uppercase  lg:text-[1rem] sm:text-[.9rem] text-[0.5875rem] w-full py-3   text-graylight`}
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
