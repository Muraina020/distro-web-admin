export const BlockedUsersColumn = [
  {
    accessorKey: "username",
    header: "Username",
    cell: (props) => {
      return <p className="text-graylight">{props.getValue() || "N/A"}</p>;
    },
  },
  {
    accessorKey: "customerId",
    header: "Customer Id",

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
      const date = props.getValue();
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
];
