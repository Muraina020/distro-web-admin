import CheckBox from "../ui/CheckBox";
import { CiTrash } from "react-icons/ci";

const DataImport = () => {
  return (
    <div className="pb-2">
      <p className="text-[#707070] md:text-[1.125rem] text-base py-4 border-b px-6">
        Import data{" "}
      </p>

      <div className="mt-5 px-5">
        <div className="flex items-center justify-between">
          <h2 className="md:text-[1.3125rem] text-base font-medium text-primary-black">
            {" "}
            Shipment Type
          </h2>

          <button className="text-primary-default md:text-[1.125rem] text-base border-b border-primary-default">
            Add
          </button>
        </div>

        <ul className="mt-2 space-y-4">
          <li className="flex items-center w-56 gap-x-4">
            <CheckBox isDefaultChecked={true} id={"Computer and Appliances"} />

            <label
              htmlFor="Computer and Appliances"
              className="text-[0.8125rem]"
            >
              Computer and Appliances{" "}
            </label>

            <button className="ms-auto">
              <CiTrash />
            </button>
          </li>
          <li className="flex items-center w-56 gap-x-4">
            <CheckBox id={"Food stuffs"} isDefaultChecked={true} />

            <label htmlFor="Food stuffs" className="text-[0.8125rem]">
              Food stuffs
            </label>
            <button className="ms-auto">
              <CiTrash />
            </button>
          </li>

          <li className="flex items-center w-56 gap-x-4">
            <CheckBox isDefaultChecked={true} id={"life stock"} />

            <label htmlFor="life stock" className="text-[0.8125rem]">
              life stock
            </label>
            <button className="ms-auto">
              <CiTrash />
            </button>
          </li>
          <li className="flex items-center w-56 gap-x-4">
            <CheckBox id={"Furniture"} />
            <label htmlFor="Furniture" className="text-[0.8125rem]">
              Furniture
            </label>
            <button className="ms-auto">
              <CiTrash />
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-5 px-5">
        <div className="flex items-center justify-between">
          <h2 className="md:text-[1.3125rem] text-base font-medium text-primary-black">
            {" "}
            Discounts & Promo Code Management
          </h2>

          <button className="text-primary-default md:text-[1.125rem] text-base border-b border-primary-default">
            create
          </button>
        </div>

        <ul className="mt-2 space-y-4">
          <li className="flex items-center w-56 gap-x-4">
            <CheckBox isDefaultChecked={true} id={"DISTRO-XMAS"} />

            <label htmlFor="DISTRO-XMAS" className="text-[0.8125rem]">
              DISTRO-XMAS
            </label>

            <button className="ms-auto">
              <CiTrash />
            </button>
          </li>
          <li className="flex items-center w-56 gap-x-4">
            <CheckBox id={"DISTROBONUS"} isDefaultChecked={true} />

            <label htmlFor="DISTROBONUS" className="text-[0.8125rem]">
              DISTROBONUS
            </label>
            <button className="ms-auto">
              <CiTrash />
            </button>
          </li>

          <li className="flex items-center w-56 gap-x-4">
            <CheckBox isDefaultChecked={true} id={"DISTROTRUCKk"} />

            <label htmlFor="DISTROTRUCKk" className="text-[0.8125rem]">
              DISTROTRUCK
            </label>
            <button className="ms-auto">
              <CiTrash />
            </button>
          </li>
          <li className="flex items-center w-56 gap-x-4">
            <CheckBox id={"NEWCUSTOMER"} />
            <label htmlFor="NEWCUSTOMER" className="text-[0.8125rem]">
              NEWCUSTOMER
            </label>
            <button className="ms-auto">
              <CiTrash />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DataImport;
