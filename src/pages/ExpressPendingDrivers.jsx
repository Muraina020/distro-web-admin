import { DataTable, Wrapper } from "../components";
import { useState } from "react";
import { activedrivers, inactivedrivers } from "../utils/data";
import { pendingAddDriverColumn } from "../components/tableColumns/pendingAddDriversColumn";
import ArrowBack from "../components/ui/ArrowBack";
import { inActiveDriversColumn } from "../components/tableColumns/InActiveDriversColumn";

const miniNavlink = ["Active Drivers", "inactive Drivers"];

const ExpressPendingDrivers = () => {
  const [active, setActive] = useState("Active Drivers");

  return (
    <Wrapper>
      <ArrowBack link={"/dashboard/orderTracking"} />
      <nav className="text-center grid grid-cols-2 border-b border-graylight/90">
        {miniNavlink.map((navtext) => {
          const isActive = active === navtext;
          return (
            <button
              onClick={() => setActive(navtext)}
              key={navtext}
              className={`relative uppercase  py-2 lg:text-[1.2625rem] text-[.9rem] leading-[2.08444rem] ${
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
        {active === "Active Drivers" && (
          <DataTable columns={pendingAddDriverColumn} data={activedrivers} />
        )}
        {active === "inactive Drivers" && (
          <DataTable columns={inActiveDriversColumn} data={inactivedrivers} />
        )}
      </div>
    </Wrapper>
  );
};
export default ExpressPendingDrivers;
