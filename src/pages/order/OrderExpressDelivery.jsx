import { useEffect, useState } from "react";
import { DataTable, TableLoading } from "../../components";

import { orderStatusNavText } from "../../utils/data";
import { customFetch } from "../../utils";
import { orderColumn } from "../../components/tableColumns/OrderTable";
import { useAuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const OrderExpressDelivery = () => {
  const [selectedTextTable, setSelectedTextTable] = useState("Pending");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { admin } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await customFetch(
          `/orders/all?deliveryStatus=${selectedTextTable}&deliveryType=Express`,
          { headers: { Authorization: `Bearer  ${admin.accessToken}` } }
        );
        setData(response.data.content);
      } catch (error) {
        if (error.response.status === 401) {
          navigate("/");
        }
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
    return <TableLoading />;
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
export default OrderExpressDelivery;
