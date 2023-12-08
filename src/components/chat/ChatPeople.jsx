import { Link, useLocation } from "react-router-dom";
import { people } from "../../utils/data";
import DriversPeople from "./DriversPeople";
import CustomersPeople from "./CustomersPeople";

const ChatPeople = () => {
  const pathName = useLocation().pathname;

  return (
    <aside className="bg-white  md:w-[25%] w-full sticky  top-[100rem] pb-7 md:pt-12  pt-3 rounded-[0.625rem] ">
      <div className="flex items-center border-b">
        <Link
          to={"/chat"}
          className={`w-full relative py-2 xl:text-[1.125rem] text-base text-center text-graylight ${
            pathName === "/chat" ? "text-primary-default" : null
          }`}
        >
          Drivers
          {pathName === "/chat" && (
            <span className="w-full h-[0.1rem] inline-block top-full absolute left-0 bg-primary-default " />
          )}
        </Link>
        <Link
          to={"/chat/customer"}
          className={`w-full relative py-2 xl:text-[1.125rem] text-base text-center text-graylight ${
            pathName === "/chat/customer" ? "text-primary-default" : null
          }`}
        >
          Customers
          {pathName === "/chat/customer" && (
            <span className="w-full h-[0.1rem] inline-block top-full absolute left-0 bg-primary-default " />
          )}
        </Link>
      </div>

      {pathName === "/chat" && <DriversPeople />}
      {pathName === "/chat/customer" && <CustomersPeople />}
    </aside>
  );
};
export default ChatPeople;
