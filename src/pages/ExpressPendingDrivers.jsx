import { Link } from "react-router-dom";
import { DataTable, Wrapper } from "../components";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";
import { drivers } from "../utils/data";
import { pendingAddDriverColumn } from "../components/tableColumns/pendingAddDriversColumn";

const miniNavlink = ["Active Drivers", "inactive Drivers"];

const ExpressPendingDrivers = () => {
  const [active, setActive] = useState("Active Drivers");

  return (
    <Wrapper>
      <Link
        to={"/orderTracking"}
        className="rounded-box inline-block p-2 hover:bg-gray-50  ml-6  mt-5"
      >
        <GoArrowLeft className="text-3xl" />
      </Link>
      <nav className="text-center grid grid-cols-2 border-b border-graylight/90">
        {miniNavlink.map((navtext) => {
          const isActive = active === navtext;
          return (
            <button
              onClick={() => setActive(navtext)}
              key={navtext}
              className={`relative uppercase  py-2 text-[1.5625rem] leading-[2.08444rem] ${
                isActive ? "text-primary-default" : " text-graylight"
              }`}
            >
              {navtext}
              {isActive && (
                <span className="absolute w-full h-[0.145rem] bg-primary-default left-0 top-full" />
              )}
            </button>
          );
        })}
      </nav>

      <div>
        <DataTable columns={pendingAddDriverColumn} data={drivers} />
      </div>
    </Wrapper>
  );
};
export default ExpressPendingDrivers;
