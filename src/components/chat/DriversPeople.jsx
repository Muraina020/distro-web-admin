import { Link } from "react-router-dom";
import { people } from "../../utils/data";

const DriversPeople = () => {
  return (
    <ul className="space-y-5">
      {people.map((person) => {
        return (
          <li key={person.id}>
            <Link to={""} className="flex items-start gap-x-5 px-2 py-2">
              <div className="w-[3.75rem] relative h-[3.75rem] flex-shrink-0 rounded-full">
                <img
                  src={person.img}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
                {person.online ? (
                  <span className="absolute z-10 -bottom-1 right-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
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
                  <span className="absolute z-10 -bottom-1 right-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
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
                <h1 className="text-primary-black text-[1.25rem] font-semibold">
                  {person.name}
                </h1>
                <p className="text-graylight text-[1.1875rem]  font-medium">
                  {person.las_Msg}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default DriversPeople;
