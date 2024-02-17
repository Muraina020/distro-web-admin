import { ArrowLeft } from "lucide-react";
import ChatUserSearch from "./ChatUserSearch";
import { useState } from "react";
import { useChatContext } from "../../context/ChatContext";

const ChatSearchMobile = ({ handleChange, searchValue, data }) => {
  const { isOpen, setIsOpen } = useChatContext();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fixed h-screen w-full z-40 sm:hidden block bg-white/95 top-0 transition-all duration-200 ease-linear left-0 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="px-2 py-3">
          <div className="flex items-center bg-neutral-200 rounded-md pl-4">
            <ArrowLeft
              onClick={handleClose}
              className="text-gray-500 w-6 h-6"
            />
            <input
              value={searchValue}
              onChange={handleChange}
              type="text"
              className="py-2 px-3 w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {searchValue && data.length < 1 && (
          <h1 className="text-lg text-neutral-400 mt-16 text-center">
            User Not Found...{" "}
          </h1>
        )}

        {!searchValue && (
          <h1 className="text-lg text-neutral-400 mt-16 text-center">
            Search for a user...{" "}
          </h1>
        )}
        {searchValue && data.length > 0 && (
          <ul className="mt-2 overflow-y-auto h-full py-5">
            {data.map((user, i) => {
              return (
                <ChatUserSearch key={i} onclick={handleClose} user={user} />
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};
export default ChatSearchMobile;
