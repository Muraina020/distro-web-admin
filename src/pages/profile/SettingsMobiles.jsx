import { CheckBox } from "../../components";
import DataCoupons from "../../components/settings/DataCoupons";
import DataShipments from "../../components/settings/DataShipments";
import Switch from "../../components/ui/Switch";
import { CiTrash } from "react-icons/ci";

const SettingsMobiles = () => {
  return (
    <div className="sm:hidden block  mt-2">
      <div>
        <h1 className="text-lg bg-white py-3 px-3 w-full">Notification</h1>
        <div className="px-3 mt-3 space-y-4">
          <div className="flex justify-between gap-x-3 items-center ">
            <div>
              <h2 className="text-base">Email notifications</h2>
              <p className="text-[.6rem] text-[#707070]">
                Get email to find out what’s going on when you’re not online.
              </p>
            </div>
            <Switch />
          </div>
          <div className="flex justify-between gap-x-2 items-center ">
            <div>
              <h2 className="text-base">Push notification</h2>
              <p className="text-[.6rem] text-[#707070]">
                These are notifications to inform you of new updates done in any
                section
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="px-3 ">
          <DataShipments />

          <div className="mt-3 ">
            <DataCoupons />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-lg bg-white py-3 px-3 w-full">Login Activities</h1>
        <div className="mt-4 px-4">
          <div className="flex items-center py-2 justify-between">
            <h2 className="text-base">Login Access History</h2>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
              >
                <path
                  d="M7.42578 19.9201L12.8591 13.4001C13.5008 12.6301 13.5008 11.3701 12.8591 10.6001L7.42578 4.08008"
                  stroke="#101828"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center py-2 justify-between">
            <h2 className="text-base">Session Management</h2>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
              >
                <path
                  d="M7.42578 19.9201L12.8591 13.4001C13.5008 12.6301 13.5008 11.3701 12.8591 10.6001L7.42578 4.08008"
                  stroke="#101828"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsMobiles;
