export const expressOrderHistoryColumn = [
  {
    accessorKey: "order_id",
    header: "Order ID",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "order_date",
    header: <p className="">ORDER DATE</p>,
    cell: (props) => {
      const date = props.getValue().toLocaleTimeString();
      return (
        <p className="w-[9.8125rem] leading-[2.08444rem] text-graylight text-center">
          Mon Jun 2 2023 {date}
        </p>
      );
    },
  },
  {
    accessorKey: "customer_id",
    header: "Customer ID",
    cell: (props) => <p className="text-graylight">{props.getValue()}</p>,
  },
  {
    accessorKey: "driver_id",
    header: "Driver ID",
    cell: (props) => <p className="text-graylight">{props.getValue()}</p>,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (props) => <p className="text-graylight">N{props.getValue()}</p>,
  },
];
