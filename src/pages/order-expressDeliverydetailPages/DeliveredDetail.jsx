import { RateReview, TableDetailInfo, Wrapper } from "../../components";
import ArrowBack from "../../components/ui/ArrowBack";

const DeliveredDetail = () => {
  return (
    <Wrapper>
      <ArrowBack link={"/orderTracking"} />
      <TableDetailInfo status={"delivered"} />

      
      {/* <div className="grid grid-cols-2 items-center   gap-x-[5rem] gap-y-8 mt-5">
          <li className="py-3 px-2 border-b w-full flex items-center justify-between">
            <span className=" text-[1.125rem] ">Driver ID</span>
            <span className=" text-[1.125rem] text-graylight">DCID-234</span>
          </li>
          <li className="py-3 px-2 border-b w-full flex items-center justify-between">
            <span className=" text-[1.125rem] ">Driver Name</span>
            <span className=" text-[1.125rem] text-graylight">
              Bankuli Kofi
            </span>
          </li>
        </div> */}

      <div className="mt-10 pb-5">
        <RateReview />
      </div>
    </Wrapper>
  );
};
export default DeliveredDetail;
