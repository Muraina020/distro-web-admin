import SingelDataImport from "./SingelDataImport";
import SkeletonLoader from "../ui/SkeletonLoader";
import useCustomFetch from "../../hooks/useCustomFetch";

const DataShipments = () => {
  const { data, loading } = useCustomFetch("/categories");

  if (loading) {
    return (
      <ul className="space-y-5 px-3">
        <li className="flex items-center gap-x-4">
          <SkeletonLoader className={"w-4 bg-neutral-300 h-4 rounded-full"} />
          <SkeletonLoader className={"h-4 bg-neutral-300 w-[20rem]"} />
        </li>
        <li className="flex items-center gap-x-4">
          <SkeletonLoader className={"w-4 bg-neutral-300 h-4 rounded-full"} />
          <SkeletonLoader className={"h-4 bg-neutral-300 w-[20rem]"} />
        </li>
        <li className="flex items-center gap-x-4">
          <SkeletonLoader className={"w-4 bg-neutral-300 h-4 rounded-full"} />
          <SkeletonLoader className={"h-4 bg-neutral-300 w-[20rem]"} />
        </li>
        <li className="flex items-center gap-x-4">
          <SkeletonLoader className={"w-4 bg-neutral-300 h-4 rounded-full"} />
          <SkeletonLoader className={"h-4 bg-neutral-300 w-[20rem]"} />
        </li>
        <li className="flex items-center gap-x-4">
          <SkeletonLoader className={"w-4 bg-neutral-300 h-4 rounded-full"} />
          <SkeletonLoader className={"h-4 bg-neutral-300 w-[20rem]"} />
        </li>
      </ul>
    );
  }
  return (
    <>
      <p className="text-[#707070] md:text-[1.125rem] text-base py-4 border-b px-6">
        Categories
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
          {data.map((category) => {
            return <SingelDataImport key={category.id} category={category} />;
          })}
        </ul>
      </div>
    </>
  );
};
export default DataShipments;
