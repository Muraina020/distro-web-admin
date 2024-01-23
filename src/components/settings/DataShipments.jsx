import SingelDataImport from "./SingelDataImport";
import SkeletonLoader from "../ui/SkeletonLoader";
import useCustomFetch from "../../hooks/useCustomFetch";
import { useDataImportContext } from "../../context/DataImportContext";
import AddCategoryForm from "./AddCategoryForm";
import { customFetch } from "../../utils";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthProvider";

const DataShipments = () => {
  const { openCategoryForm } = useDataImportContext();
  const [loading, setLoading] = useState(false);
  const [shipments, setShipments] = useState([]);
  const { admin } = useAuthContext();

  const requestConfig = {
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await customFetch("/categories", requestConfig);
      setShipments(response.data.reverse());
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        navigate("/");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

          <button
            onClick={openCategoryForm}
            className="text-primary-default md:text-[1.125rem] text-base border-b border-primary-default"
          >
            Add
          </button>
        </div>

        <ul className="mt-2 space-y-4">
          {shipments.map((category) => {
            return (
              <SingelDataImport
                key={category.id}
                requestConfig={requestConfig}
                category={category}
                fetchData={fetchData}
              />
            );
          })}
        </ul>
      </div>
      <AddCategoryForm requestConfig={requestConfig} fetchData={fetchData} />
    </>
  );
};
export default DataShipments;
