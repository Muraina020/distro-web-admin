import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const DataTablePagination = ({ table }) => {
  const pageCount = table.getPageCount();
  const pageIndex = table.getState().pagination.pageIndex + 1;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  return (
    <>
      {pageCount > 1 && (
        <div className="join ">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="join-item disabled:bg-transparent   py-2 px-4 active:scale-95 transition-all duration-300 active:bg-gray-100   text-graylight"
          >
            <GoChevronLeft />
          </button>
          {pages.map((pageNumber) => {
            return (
              <button
                key={pageNumber}
                onClick={() => table.setPageIndex(pageNumber - 1)}
                className={`join-item hover:bg-gray-100 transition-colors duration-200  py-2 px-4  text-[1.05413rem]   ${
                  pageIndex === pageNumber
                    ? "text-primary-default bg-gray-100"
                    : "text-[#111]"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="join-item disabled:bg-transparent py-2 px-4   text-[1.05413rem] text-graylight active:scale-95 transition-all duration-300 active:bg-gray-100 "
          >
            <GoChevronRight />
          </button>
        </div>
      )}
    </>
  );
};
export default DataTablePagination;
