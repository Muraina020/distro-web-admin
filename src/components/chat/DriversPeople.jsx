import { Link } from "react-router-dom";
import { people } from "../../utils/data";

const DriversPeople = () => {
  return (
    <ul className="space-y-5">
      {people.map((person) => {
        return (
          <li key={person.id} className="cursor-pointer">
            <div className="flex items-start gap-x-5 px-2 py-2">
              <div className="xl:w-[2.5rem]  w-[1.9rem] xl:h-[2.5rem] h-[1.9rem] relative  flex-shrink-0 rounded-full">
                <img
                  src={person.img}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
                {person.online ? (
                  <span className="absolute z-10 xl:-bottom-1 -bottom-2 xl:right-0 -right-1">
                    <svg
                      className="xl:w-[22px] w-[13px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <circle
                        cx="11"
                        cy="11"
                        r="10"
                        fill="#46B04C"
                        stroke="#EFF6FF"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="absolute z-10 xl:-bottom-1 -bottom-2 xl:right-0 -right-1">
                    <svg
                      className="xl:w-[22px] w-[13px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <circle
                        cx="11"
                        cy="11"
                        r="10"
                        fill="#868686"
                        stroke="#EFF6FF"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                )}
              </div>
              <div className="">
                <h1 className="text-primary-black xl:text-[1rem] text-base font-semibold">
                  {person.name}
                </h1>
                <p className="text-graylight xl:text-[.6rem] text-xs  font-medium">
                  {person.las_Msg}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default DriversPeople;
