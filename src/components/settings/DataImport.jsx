import useCustomFetch from "../../hooks/useCustomFetch";
import SingelDataImport from "./SingelDataImport";
import SkeletonLoader from "../ui/SkeletonLoader";
import DataCoupons from "./DataCoupons";
import DataShipments from "./DataShipments";

const DataImport = () => {
  return (
    <div className="pb-2">
      <DataShipments />

      <div className="mt-5 px-5">
        <DataCoupons />
      </div>
    </div>
  );
};
export default DataImport;
