import { ArrowUpDown } from "lucide-react";
import { useAsiignDriverContext } from "../../context/AssignOrderContext";
import { customFetch } from "../../utils";
import { useAuthContext } from "../../context/AuthProvider";

export const assignDriverColumn = [
  {
    accessorKey: "driverId",
    header: ({ column }) => {
      return (
        <button
          className="flex group items-center py-1 rounded-lg px-2 hover:bg-blue-100 duration-150 transition"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Driver ID
          <ArrowUpDown className="ml-2 h-4 w-4 group-active:scale-90 transition-all duration-200" />
        </button>
      );
    },
    cell: (props) => <p className="text-graylight">{props.getValue()}</p>,
  },
  {
    accessorKey: "fullName",
    header: <p>NAME</p>,
    cell: (props) => <p className="text-graylight">{props.getValue()}</p>,
  },
  {
    accessorKey: "phoneNumber",
    header: <p>Contact</p>,
    cell: (props) => <p className="text-graylight">{props.getValue()}</p>,
  },

  {
    accessorKey: "currentStatus",
    header: <p className="">Status</p>,
    cell: (props) => {
      const status = props.getValue();

      const bgColor = status === "Free" ? "#46B04C" : "#F9BF42";

      return (
        <p className="">
          <span
            style={{ background: bgColor }}
            className="text-white  rounded-[0.5rem] px-[0.375rem] py-[0.25rem]"
          >
            {props.getValue()}
          </span>
        </p>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Assign",
    cell: ({ row }) => {
      const status = row.original.currentStatus;
      const isFree = status === "Free";
      const { orderId } = useAsiignDriverContext();
      const { admin } = useAuthContext();
      const driverId = row.original.driverId;

      const handleAssignDriver = async () => {
        try {
          const resp = customFetch.post(
            "/pickuporders/add-driver",
            {
              driverId: driverId,
              pickupId: orderId,
            },
            { headers: { Authorization: `Bearer ${admin.accessToken}` } }
          );
        } catch (error) {
          console.log(error);
        }
      };

      return (
        <button
          disabled={!isFree}
          onClick={handleAssignDriver}
          className="text-primary-default font-semibold p-1 disabled:opacity-50 disabled:hover:bg-gray-100 hover:bg-slate-300 rounded-md transition duration-300"
        >
          select
        </button>
      );
    },
  },
];
