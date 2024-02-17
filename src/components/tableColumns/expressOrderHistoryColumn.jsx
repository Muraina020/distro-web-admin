import { ArrowUpDown } from "lucide-react";
import { formatPrice, formateDate } from "../../utils";
import { Link } from "react-router-dom";

export const expressOrderHistoryColumn = [
  {
    accessorKey: "shipmentId",
    header: (props) => {
      return (
        <button
          className="flex group items-center py-1 rounded-lg px-2 hover:bg-blue-100 duration-150 transition"
          onClick={() =>
            props.column.toggleSorting(props.column.getIsSorted() === "asc")
          }
        >
          ORDER ID
          <ArrowUpDown className="ml-2 h-4 w-4 group-active:scale-90 transition-all duration-200" />
        </button>
      );
    },

    cell: (props) => (
      <p className="whitespace-nowrap">
        {props.getValue() ? props.getValue() : "N/A"}
      </p>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <button
          className="flex group items-center py-1 rounded-lg px-2 hover:bg-blue-100 duration-150 transition"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ORDER DATE
          <ArrowUpDown className="ml-2 h-4 w-4 group-active:scale-90 transition-all duration-200" />
        </button>
      );
    },
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
  {
    accessorKey: "details",
    header: "Datails",
    cell: ({ row }) => {
      const id = row.original.pickupId;
      return (
        <Link
          to={`/dashboard/orderTracking/${id}`}
          className="p-1 rounded-md bg-gray-200 text-gray-600"
        >
          View
        </Link>
      );
    },
  },
];
