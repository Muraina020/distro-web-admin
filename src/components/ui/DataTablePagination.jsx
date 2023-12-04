import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const DataTablePagination = () => {
  return (
    <div className="join ">
      <button className="join-item   py-2 px-4  text-graylight">
        <GoChevronLeft />
      </button>
      <button className="join-item   py-2 px-4   text-[1.05413rem]  text-primary-default ">
        1
      </button>
      <button className="join-item  py-2 px-4  text-[1.05413rem]  text-[#111]">
        2
      </button>
      <button className="join-item  py-2 px-4  text-[1.05413rem]">3</button>
      <button className="join-item  py-2 px-4  text-[1.05413rem] text-[#111]">
        4
      </button>
      <button className="join-item  py-2 px-4  text-[1.05413rem] text-graylight">
        <GoChevronRight />
      </button>
    </div>
  );
};
export default DataTablePagination;
