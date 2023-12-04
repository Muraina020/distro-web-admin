export const pendingAddDriverColumn = [
  {
    accessorKey: "driver_id",
    header: "Driver ID",
    cell: (props) => <p className="text-graylight">{props.getValue()}</p>,
  },
  {
    accessorKey: "name",
    header: <p className="text-center">NAME</p>,
    cell: (props) => (
      <p className="text-graylight text-center">{props.getValue()}</p>
    ),
  },
  {
    accessorKey: "daily_assign",
    header: <p className="text-center">Daily assigned Orders</p>,
    cell: (props) => (
      <p className="text-graylight text-center">{props.getValue()}</p>
    ),
  },
  {
    accessorKey: "status",
    header: <p className="text-center">Status</p>,
    cell: (props) => (
      <p className="text-center">
        <span className="text-white bg-[#46B04C] rounded-[0.5rem] px-[0.375rem] py-[0.25rem]">
          {props.getValue()}
        </span>
      </p>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: (props) => (
      <button className="text-primary-default font-semibold">select</button>
    ),
  },
];
