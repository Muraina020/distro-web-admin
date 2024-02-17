import { useEffect, useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";

const DataTablePagination = ({ table }) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const pageCount = table.getPageCount();
  // const pageIndex = table.getState().pagination.pageIndex + 1;
  const [pageIndex, setPageIndex] = useState(1);
  const [displayPages, setDisplayedPages] = useState([]);

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams(search);
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  useEffect(() => {
    const pageParams = new URLSearchParams(search);
    const page = parseInt(pageParams.get("page"), 10) || 1;
    setPageIndex(page);
    updateDisplayedPages(page);
    table.setPageIndex(page - 1);
  }, [pageIndex, search]);

  const updateDisplayedPages = (currentPage) => {
    const totalPages = Math.min(5, pageCount);
    const half = Math.floor(totalPages / 2);
    let start = currentPage - half;
    start = Math.max(start, 1);
    start = Math.min(start, Math.max(1, pageCount - totalPages + 1));
    setDisplayedPages(
      Array.from({ length: totalPages }, (_, index) => start + index)
    );
  };

  const goToPage = (pageNumber) => {
    const newUrl = createPageUrl(pageNumber);
    navigate(newUrl);
  };

  return (
    <>
      {pageCount > 1 && (
        <div className="join ">
          <button
            onClick={() => {
              if (pageIndex > 1) {
                goToPage(pageIndex - 1);
                table.previousPage();
                setPageIndex((prev) => prev - 1);
              }
            }}
            disabled={!table.getCanPreviousPage()}
            className="join-item disabled:bg-transparent   py-2 px-4 active:scale-95 transition-all duration-300 active:bg-gray-100   text-graylight"
          >
            <GoChevronLeft />
          </button>

          {displayPages.map((pageNumber) => {
            return (
              <button
                key={pageNumber}
                onClick={() => {
                  table.setPageIndex(pageNumber - 1);
                  const newUrl = createPageUrl(pageNumber);
                  navigate(newUrl);
                  setPageIndex(pageNumber);
                }}
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
            onClick={() => {
              if (pageIndex < pageCount) {
                goToPage(pageIndex + 1);
                table.nextPage();
                setPageIndex((prev) => prev + 1);
              }
            }}
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
