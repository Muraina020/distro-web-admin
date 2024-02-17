import { DataTable, TableLoading, Wrapper } from "../components";
import { useState } from "react";
import { inactivedrivers } from "../utils/data";
import { assignDriverColumn } from "../components/tableColumns/assignDriverColumn";
import ArrowBack from "../components/ui/ArrowBack";
import { inActiveDriversColumn } from "../components/tableColumns/InActiveDriversColumn";
import useCustomFetch from "../hooks/useCustomFetch";

const ExpressPendingDrivers = () => {
  const { data: _data, loading } = useCustomFetch(
    `/drivers/active/all?PageSize=${Infinity}`
  );

  const data = _data.content || [];

  if (loading) {
    return (
      <Wrapper>
        <TableLoading />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ArrowBack link={"/dashboard/orderTracking"} />
      <nav className="text-center border-b border-graylight/90">
        <h4
          className={`relative uppercase  py-2 lg:text-[1.2625rem] text-[.9rem] leading-[2.08444rem] 
              text-graylight"
              `}
        >
          Assign a Driver
        </h4>
      </nav>

      <div>
        <DataTable
          filter={true}
          condition="fullName"
          columns={assignDriverColumn}
          data={data}
        />
      </div>
    </Wrapper>
  );
};
export default ExpressPendingDrivers;
