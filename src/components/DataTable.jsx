import { useState } from "react";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import DataTablePagination from "./ui/DataTablePagination";

const DataTable = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="pb-5 ">
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            {table.getHeaderGroups().map((headerGroup, i) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      className="lg:text-[1rem] text-[.9rem] py-7  font-semibold"
                    >
                      {header.column.columnDef.header}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50 transition duration-300"
              >
                {row.getVisibleCells().map((cell) => {
                  const id = cell.getContext().row.original.order_id;

                  return (
                    <td
                      key={cell.id}
                      className="lg:text-[1rem] text-[.8rem] py-4 "
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" flex justify-center mt-7">
        <DataTablePagination />
      </div>
    </div>
  );
};

export default DataTable;
