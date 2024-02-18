import useClickOutside from "../../hooks/useClickOutside";
import { useState } from "react";
import ChatModal from "./ChatModal";
import {
  collection,
  collectionGroup,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";
import ChatSearchMobile from "./ChatSearchMobile";

const ChatSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref } = useClickOutside(handleSearchModal);
  const [searchValue, setSearchValue] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [chatRooms, setChatRooms] = useState([]);

  function handleSearchModal() {
    setIsModalOpen(false);
    setSearchValue("");
  }

  function handleFilter() {
    const filteredUser = chatRooms.filter((user) => {
      return (
        user && user.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setUsersData(filteredUser);
  }

  useEffect(() => {
    const handleSearch = async () => {
      const q = query(collection(db, "Chatrooms"));
      const querySnapshot = await getDocs(q);

      const chatUsersArr = [];
      querySnapshot.forEach((doc) => {
        const chatroomData = doc.data();
        chatroomData.users?.forEach((user) => {
          chatUsersArr.push(user);
        });
        setChatRooms(chatUsersArr);
      });
    };

    handleSearch();
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    handleFilter();
  };

  return (
    <>
      <div
        ref={ref}
        className="max-w-[390px] relative  hidden  w-full sm:flex  items-center bg-white rounded-[48px] p-1 pr-3"
      >
        <button className="pl-2">
          <svg
            className="lg:w-[25px] lg:h-[25px] w-[20px] h-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_1403_8372)">
              <path
                d="M15.4996 14.0001H14.7096L14.4296 13.7301C15.6296 12.3301 16.2496 10.4201 15.9096 8.39014C15.4396 5.61014 13.1196 3.39014 10.3196 3.05014C6.08965 2.53014 2.52965 6.09014 3.04965 10.3201C3.38965 13.1201 5.60965 15.4401 8.38965 15.9101C10.4196 16.2501 12.3296 15.6301 13.7296 14.4301L13.9996 14.7101V15.5001L18.2496 19.7501C18.6596 20.1601 19.3296 20.1601 19.7396 19.7501C20.1496 19.3401 20.1496 18.6701 19.7396 18.2601L15.4996 14.0001ZM9.49965 14.0001C7.00965 14.0001 4.99965 11.9901 4.99965 9.50014C4.99965 7.01014 7.00965 5.00014 9.49965 5.00014C11.9896 5.00014 13.9996 7.01014 13.9996 9.50014C13.9996 11.9901 11.9896 14.0001 9.49965 14.0001Z"
                fill="#6C8B64"
              />
            </g>
            <defs>
              <clipPath id="clip0_1403_8372">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <input
          onFocus={() => setIsModalOpen(true)}
          onChange={handleChange}
          value={searchValue}
          type="text"
          placeholder="Type to Search ...."
          className="w-full outline-none p-2 rounded-[48px] "
        />
        {isModalOpen && (
          <ChatModal
            data={usersData}
            searchValue={searchValue}
            handleSearchModal={handleSearchModal}
          />
        )}
      </div>

      <ChatSearchMobile
        data={usersData}
        searchValue={searchValue}
        handleChange={handleChange}
      />
    </>
  );
};
export default ChatSearch;
