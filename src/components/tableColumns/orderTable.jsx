import { Link } from "react-router-dom";
import { formatPrice, formateDate } from "../../utils";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export const orderColumn = [
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
    cell: (props) => {
      const id = props.row.original.id;

      return (
        <Link to={`/dashboard/orderTracking/${id}`} className="text-graylight">
          {!props.getValue() ? "..." : props.getValue()}
        </Link>
      );
    },
  },
  {
    accessorKey: "date",
    header: (props) => {
      return (
        <button
          className="flex group items-center py-1 rounded-lg px-2 hover:bg-blue-100 duration-150 transition"
          onClick={() =>
            props.column.toggleSorting(props.column.getIsSorted() === "asc")
          }
        >
          ORDER DATE
          <ArrowUpDown className="ml-2 h-4 w-4 group-active:scale-90 transition-all dura" />
        </button>
      );
    },

    cell: (props) => {
      const date = props.getValue();
      const id = props.row.original.id;

      return (
        <Link
          to={`/dashboard/orderTracking/${id}`}
          className="sm:w-[9.8125rem] mx-auto w-[6rem] leading-[1.5rem] text-graylight text-center"
        >
          {!formateDate(date) ? "..." : formateDate(date)}
        </Link>
      );
    },
  },
  {
    accessorKey: "customerId",
    header: "CUSTOMER ID",
    cell: (props) => (
      <p className="text-graydark">
        {!props.getValue() ? "..." : props.getValue()}
      </p>
    ),
  },
  {
    accessorKey: "driverId",
    header: "DRIVER ID",
    cell: ({ cell }) => {
      const id = cell.row.original.driver?.driverId;

      return <p className="text-graydark">{!id ? "..." : id}</p>;
    },
  },
  {
    accessorKey: "paymentStatus",
    header: <p className="text-center">PAYMENT STATUS</p>,
    cell: (props) => {
      const status = props.getValue();
      const formatedColor =
        status === "Paid"
          ? "#00A69C"
          : status === "Pay on Delivery"
          ? "#F9BF42"
          : "red";

      const formatedBg =
        status === "paid" ? "#F1FEFD" : status === "Pay on Delivery";

      return (
        <p className="text-center">
          <span
            style={{ color: formatedColor, background: formatedBg }}
            className={` rounded-[0.5rem] py-[0.25rem]  first-letter:uppercase ${
              status === "paid" ? "px-[1.625rem]" : " px-[0.1875rem]"
            }`}
          >
            {!status ? "..." : status}
          </span>
        </p>
      );
    },
  },
  {
    accessorKey: "price",
    header: "AMOUNT",
    cell: (props) => {
      const amount = parseFloat(props.getValue());
      return <p>{formatPrice(amount)}</p>;
    },
  },
  {
    accessorKey: "details",
    header: "Datails",
    cell: ({ row }) => {
      const id = row.original.id;
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
