import { getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import ChatUserSearch from "./ChatUserSearch";

const ChatModal = ({ data, searchValue, handleSearchModal }) => {
  return (
    <div className="absolute w-full h-[13rem] py-2 overflow-y-auto bg-white rounded-md shadow-lg top-full left-0">
      {!searchValue && (
        <h1 className=" text-center text-neutral-500 font-semibold mt-11">
          Search for a user...
        </h1>
      )}
      {data.length === 0 && searchValue && (
        <h1 className=" text-center text-neutral-500 font-semibold mt-11">
          No user found...
        </h1>
      )}
      {data.length > 0 && searchValue && (
        <ul>
          {data.map((user, i) => {
            return (
              <ChatUserSearch key={i} user={user} onclick={handleSearchModal} />
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default ChatModal;
