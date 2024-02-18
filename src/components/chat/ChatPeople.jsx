import { Link, useLocation } from "react-router-dom";
import DriversPeople from "./DriversPeople";
import { useChatContext } from "../../context/ChatContext";
import { useMediaQuery } from "@uidotdev/usehooks";

const ChatPeople = () => {
  const pathName = useLocation().pathname;
  const isMediumDevice = useMediaQuery("only screen and (min-width : 768px)");

  const { select } = useChatContext();

  return (
    <aside
      className={`bg-white   md:w-[25%] w-full h-[80vh]  overflow-y-scroll  top-[100rem] pb-7 md:pt-4  pt-3 rounded-[0.625rem] ${
        select && "hidden"
      }`}
    >
      <div className="flex items-center border-b">
        <Link
          to={"/chat"}
          className={`w-full relative py-2 xl:text-[1.125rem] text-base text-center text-graylight ${
            pathName === "/chat" ? "text-primary-default" : null
          }`}
        >
          Chat
          {pathName === "/chat" && (
            <span className="w-full h-[0.1rem] inline-block top-full absolute left-0 bg-primary-default " />
          )}
        </Link>
      </div>

      {pathName === "/chat" && <DriversPeople />}
    </aside>
  );
};
export default ChatPeople;
