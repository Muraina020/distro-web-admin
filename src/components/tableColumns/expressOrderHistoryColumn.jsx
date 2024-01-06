import { formatPrice, formateDate } from "../../utils";

export const expressOrderHistoryColumn = [
  {
    accessorKey: "shipmentId",
    header: "Order ID",

    cell: (props) => (
      <p className="whitespace-nowrap">
        {props.getValue() ? props.getValue() : "N/A"}
      </p>
    ),
  },
  {
    accessorKey: "date",
    header: <p className="text-center">ORDER DATE</p>,
    cell: (props) => {
      const date = props.getValue();
      return (
        <p className="sm:w-[9.8125rem] mx-auto w-[6rem] leading-[1.5rem] text-graylight text-center">
          {formateDate(date)}
        </p>
      );
    },
  },
  {
    accessorKey: "customerId",
    header: "Customer ID",
    cell: (props) => <p className="text-graylight">{props.getValue()}</p>,
  },
  {
    accessorKey: "driverId",
    header: "Driver ID",
    cell: (props) => <p className="text-graylight">{props.getValue()}</p>,
  },
  {
    accessorKey: "price",
    header: "Amount",
    cell: (props) => {
      const amount = parseFloat(props.getValue());

      return <p className="text-graylight">{formatPrice(amount)}</p>;
    },
  },
];
