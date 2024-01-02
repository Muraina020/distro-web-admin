import { useEffect } from "react";
import { useParams } from "react-router-dom";

const TableDetailInfo = ({ status }) => {
  const formattedColor =
    status === "pending"
      ? "#00A69C"
      : status === "picked up"
      ? "#46B04C"
      : status === "on the way"
      ? "#F9BF42"
      : status === "delivered"
      ? "#2593F0"
      : "#FF3838";

  return (
    <div>
      <div className="flex gap-4 lg:px-7 px-2 border-b py-4">
        <span className="bg-[#05988740] rounded-[0.89606rem] w-[4.44938rem] h-[4.44938rem]  place-items-center lg:grid hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="40"
            viewBox="0 0 39 40"
            fill="none"
          >
            <path
              d="M28.2934 16.0858L10.5041 5.92039M21.9198 2.27865L34.6265 9.53926C35.4048 9.98384 36.0517 10.6263 36.5015 11.4016C36.9514 12.1768 37.1883 13.0572 37.1881 13.9536V25.842C37.1883 26.7383 36.9514 27.6187 36.5015 28.394C36.0517 29.1692 35.4048 29.8117 34.6265 30.2563L21.9198 37.5169C21.152 37.9555 20.283 38.1862 19.3988 38.1862C18.5145 38.1862 17.6456 37.9555 16.8777 37.5169L4.17105 30.2563C3.39275 29.8117 2.74585 29.1692 2.29597 28.394C1.84609 27.6187 1.60922 26.7383 1.60938 25.842V13.9536C1.60922 13.0572 1.84609 12.1768 2.29597 11.4016C2.74585 10.6263 3.39275 9.98384 4.17105 9.53926L16.8777 2.27865C17.6456 1.84006 18.5145 1.60938 19.3988 1.60938C20.283 1.60938 21.152 1.84006 21.9198 2.27865Z"
              stroke="#059887"
              strokeWidth="2.86736"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.88086 12.2754L16.9904 19.874C17.7308 20.2726 18.5586 20.4813 19.3996 20.4813C20.2405 20.4813 21.0683 20.2726 21.8088 19.874L35.9183 12.2754M19.3996 21.1701V37.6888"
              stroke="#059887"
              strokeWidth="2.86736"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className="">
          <h5 className="lg:text-[1.5625rem] text-[1.1rem]">DL-5679-435EX</h5>
          <p className="mt-1 text-graylight lg:text-[1.25rem] text-[1rem]">
            Mon Jun 2 2023 12:38:37{" "}
          </p>
        </div>
        <div className="ms-auto">
          <h5 className="lg:text-[1.5625rem] text-[1.1rem] font-semibold leading-[-0.05875rem]">
            N5,600
          </h5>
          <span className="inline-block rounded-[0.40475rem] lg:text-[1.48144rem] text-[1rem] text-primary-default px-[1.11013rem] bg-[#F1FEFD]">
            Paid
          </span>
        </div>
      </div>

      <ul className="grid grid-cols-2 items-center  lg:px-8 px-2 flex-wrap lg:gap-x-[5rem] gap-x-[1rem] gap-y-8 mt-5">
        <li className="py-3 px-2 border-b w-full flex gap-x-1 items-center ">
          <span className=" lg:text-[1.125rem] text-[.9rem] basis-[63%]">
            Customer ID
          </span>
          <span className=" lg:text-[1.125rem] text-[.9rem] text-graylight">
            DCID-234
          </span>
        </li>
        <li className="py-3 px-2 border-b w-full flex gap-x-1 items-center ">
          <span className=" lg:text-[1.125rem] text-[.9rem] basis-3/4">
            Customer Name
          </span>
          <span className=" lg:text-[1.125rem] text-[.9rem] text-graylight">
            Bankuli Kofi
          </span>
        </li>
        <li className="py-3 px-2 border-b w-full gap-x-1 flex items-center ">
          <span className=" lg:text-[1.125rem] text-[.9rem] basis-[63%] ">
            Customer Phone
          </span>
          <span className=" lg:text-[1.125rem] text-[.9rem] text-graylight">
            080123456789
          </span>
        </li>
        <li className="py-3 px-2 border-b w-full flex gap-x-1 items-center ">
          <span className=" lg:text-[1.125rem] text-[.9rem] basis-3/4 ">
            Distance
          </span>
          <span className=" lg:text-[1.125rem] text-[.9rem] text-graylight">
            50km
          </span>
        </li>
        <li className="py-3 px-2 border-b w-full gap-x-1 flex  items-center ">
          <span className=" lg:text-[1.125rem] text-[.9rem] basis-[63%]">
            Package Type
          </span>
          <span className=" lg:text-[1.125rem] text-[.9rem] text-graylight">
            Food items
          </span>
        </li>
        <li className="py-3 px-2 border-b w-full gap-x-1 flex items-center ">
          <span className=" lg:text-[1.125rem] text-[.9rem] basis-3/4">
            Status
          </span>
          <span
            style={{ color: formattedColor }}
            className=" lg:text-[1.125rem] text-[.9rem] capitalize text-graylight"
          >
            {status}
          </span>
        </li>
      </ul>

      <ul className="mt-8 lg:px-8 px-2 space-y-8">
        <li className="py-3 px-2 border-b gap-x-1  w-full flex items-center ">
          <span className="basis-[28%]	 lg:text-[1.125rem] text-[.9rem] ">
            Special Instruction
          </span>
          <span className=" lg:text-[1.125rem] text-[.9rem]  text-graylight">
            Breakable items, be careful when carrying it and when dropping it,
            it’s vey{" "}
          </span>
        </li>
        <li className="py-3 px-2 border-b w-full flex gap-x-1 items-center  ">
          <span className=" lg:text-[1.125rem] text-[.9rem] basis-[28%] ">
            Pickup
          </span>
          <span className=" lg:text-[1.125rem] text-[.9rem] text-graylight">
            36 Adeola Adeleye Street, Ilupeju, Lagos
          </span>
        </li>

        <li className="py-3 px-2 border-b w-full flex gap-x-1  items-center ">
          <span className="basis-[28%] lg:text-[1.125rem] text-[.9rem] ">
            Destination{" "}
          </span>
          <span className=" lg:text-[1.125rem] text-[.9rem] text-graylight ">
            23 Ikorodu-Ososun Rd, ilupeju, Lagos
          </span>
        </li>
      </ul>
    </div>
  );
};
export default TableDetailInfo;
