export const BlockedDriversColumn = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (props) => {
      return <p className="text-graylight">{props.getValue() || "N/A"}</p>;
    },
  },
  {
    accessorKey: "driverId",
    header: "Driver Id",

    cell: (props) => (
      <p className="whitespace-nowrap">
        {props.getValue() ? props.getValue() : "N/A"}
      </p>
    ),
  },
  {
    accessorKey: "email",
    header: <p className="">Email</p>,
    cell: (props) => {
      return (
        <p className="whitespace-nowrap">
          {props.getValue() ? props.getValue() : "N/A"}
        </p>
      );
    },
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: (props) => (
      <p className="text-graylight">{props.getValue() || "N/A"}</p>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: (props) => (
      <p className="text-graylight">{props.getValue() || "N/A"}</p>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: (props) => {
      return <p className="text-graylight">{props.getValue() || "N/A"}</p>;
    },
  },
  {
    accessorKey: "city",
    header: "City",
    cell: (props) => {
      return <p className="text-graylight">{props.getValue() || "N/A"}</p>;
    },
  },
  {
    accessorKey: "state",
    header: "State",
    cell: (props) => {
      return <p className="text-graylight">{props.getValue() || "N/A"}</p>;
    },
  },
];
