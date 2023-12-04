import CheckBox from "../ui/CheckBox";

const DataImport = () => {
  return (
    <div>
      <p className="text-[#707070] text-[1.125rem] py-4 border-b px-6">
        Import data{" "}
      </p>

      <div className="mt-5 px-5">
        <div className="flex items-center justify-between">
          <h2 className="text-[1.3125rem] font-medium text-primary-black">
            {" "}
            Shipment Type
          </h2>

          <button className="text-primary-default text-[1.125rem] border-b border-primary-default">
            Add
          </button>
        </div>

        <ul className="mt-2 space-y-4">
          <li className="flex items-center gap-x-4">
            <CheckBox isDefaultChecked={true} id={"Computer and Appliances"} />

            <label
              htmlFor="Computer and Appliances"
              className="text-[0.8125rem]"
            >
              Computer and Appliances{" "}
            </label>
          </li>
          <li className="flex items-center gap-x-4">
            <CheckBox id={"Food stuffs"} isDefaultChecked={true} />

            <label htmlFor="Food stuffs" className="text-[0.8125rem]">
              Food stuffs
            </label>
          </li>

          <li className="flex items-center gap-x-4">
            <CheckBox isDefaultChecked={true} id={"life stock"} />

            <label htmlFor="life stock" className="text-[0.8125rem]">
              life stock
            </label>
          </li>
          <li className="flex items-center gap-x-4">
            <CheckBox id={"Furniture"} />

            <label htmlFor="Furniture" className="text-[0.8125rem]">
              Furniture
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DataImport;
