import { Link, useLocation } from "react-router-dom";
import { people } from "../../utils/data";
import DriversPeople from "./DriversPeople";
import CustomersPeople from "./CustomersPeople";
import { useEffect, useState } from "react";

import {
  collection,
  onSnapshot,
  doc,
  orderBy,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";

const ChatPeople = ({ chatRooms }) => {
  const pathName = useLocation().pathname;
  const [user, setUser] = useState(null);
  // const [chats, setChats] = useState([]);

  // useEffect(() => {
  //   const getChats = () => {
  //     const unsub = onSnapshot(
  //       doc(db, "Chatrooms", "support@distro.com.ng_infodesk@lampnets.com"),
  //       (doc) => {
  //         // console.log("Current data: ", doc.data());
  //         setChats(doc.data());
  //       }
  //     );
  //     return () => unsub();
  //   };

  //   getChats();
  // });

  return (
    <aside className="bg-white  md:w-[25%] w-full   top-[100rem] pb-7 md:pt-4  pt-3 rounded-[0.625rem]  ">
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

      {/* <input
        type="text"
        placeholder="find a user"
        className="w-full py-1 px-2 bg-transparent border-b outline-none focus-within:placeholder:opacity-0 transition-opacity "
      /> */}

      {pathName === "/chat" && <DriversPeople chatRooms={chatRooms} />}
      {pathName === "/chat/customer" && <CustomersPeople />}
    </aside>
  );
};
export default ChatPeople;
