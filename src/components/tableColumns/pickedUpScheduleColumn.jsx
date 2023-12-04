import { Link } from "react-router-dom";

export const pickedUpScheduleColumn = [
  {
    accessorKey: "order_id",
    header: "ORDER ID",
    cell: (props) => (
      <Link to={`OrderPickedUp/${props.getValue()}`} className="text-graylight">
        {props.getValue()}
      </Link>
    ),
  },
  {
    accessorKey: "order_date",
    header: "ORDER DATE",
    cell: (props) => {
      const date = props.getValue().toLocaleTimeString();
      const id = props.cell.id;
      return (
        <Link to={`OrderPickedUp/${id}`}>
          <div className="text-graylight text-center">
            <p>Mon Jun 2 2023</p>
            <p className="mt-2">{date}</p>
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "customer_id",
    header: "CUSTOMER ID",
    cell: (props) => <p className="text-graydark">{props.getValue()}</p>,
  },
  {
    accessorKey: "driver_id",
    header: "DRIVER ID",
    cell: (props) => <p className="text-graydark">{props.getValue()}</p>,
  },
  {
    accessorKey: "payment_status",
    header: <p className="text-center">PAYMENT STATUS</p>,
    cell: (props) => {
      const status = props.getValue();
      const formatedColor =
        status === "paid"
          ? "#00A69C"
          : status === "Pay on delivery"
          ? "#F9BF42"
          : "blue";

      const formatedBg =
        status === "paid" ? "#F1FEFD" : status === "Pay on delivery";

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
    accessorKey: "amount",
    header: "AMOUNT",
    cell: (props) => <p>N{props.getValue()}</p>,
  },
];
