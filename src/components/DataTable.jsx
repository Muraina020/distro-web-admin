import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import DataTablePagination from "./ui/DataTablePagination";
import { useState } from "react";

const DataTable = ({ data, columns, filter }) => {
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <div className="pb-5 ">
      <div className="overflow-x-auto">
        {filter && (
          <div className="flex justify-end my-4 pr-5">
            <input
              value={table.getColumn("name")?.getFilterValue() ?? ""}
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              type="text"
              placeholder="filter name..."
              className="py-2 px-3 rounded-md border "
            />
          </div>
        )}

        <table className="table table-lg">
          <thead className="">
            {table.getHeaderGroups().map((headerGroup, i) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, i) => {
                  return (
                    <th
                      key={i}
                      className="lg:text-[1rem]   text-[.9rem] py-7  font-semibold"
                    >
                      {header.column.columnDef.header}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50  transition duration-300"
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className="lg:text-[1rem]  text-[.8rem] py-4 "
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-base text-center text-gray-700"
                >
                  {" "}
                  No results.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className=" flex justify-center mt-7">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
};

export default DataTable;
