import { getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const ChatModal = ({ data, searchValue }) => {
  const handleClick = async () => {
    // const combinedId =
    const res = await getDocs(db, "Chatrooms");
  };
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
              <li
                onClick={handleClick}
                key={i}
                className="py-3 px-3 hover:bg-neutral-100 duration-300 cursor-pointer rounded-md"
              >
                <div className="flex items-center gap-x-8">
                  <figure className="w-[2.5rem] h-[2.5rem] rounded-full">
                    <img
                      src={
                        user.profileUrl
                          ? user.profileUrl
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS167rCp9mKFPIQo0E5lfr9p2OIqZ2XpU9wgbDkoUC5tQ&s"
                      }
                      alt=""
                      className="w-full h-full rounded-full object-cover"
                    />
                  </figure>
                  <h5 className="font-medium text-base capitalize">
                    {user.name}
                  </h5>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default ChatModal;
