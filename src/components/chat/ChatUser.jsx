import { useAuthContext } from "../../context/AuthProvider";

const ChatUser = ({ person, onclick, active }) => {
  const { users } = person;

  const {
    admin: { phoneNoOrEmail: currentUid },
  } = useAuthContext();

  const filteredUsers = users.filter((user) => user.uid !== currentUid);

  const handleActiveUser = () => {
    onclick(users?.[0], person.chatRoomId);
  };

  return (
    <>
      {person && (
        <li
          onClick={handleActiveUser}
          className={`cursor-pointer  rounded-md ${
            active === person.chatRoomId ? "bg-neutral-200" : null
          }`}
        >
          <div className="flex items-start gap-x-5 px-2 py-2">
            <div className="xl:w-[2.5rem]  w-[1.9rem] xl:h-[2.5rem] h-[1.9rem] relative  flex-shrink-0 rounded-full">
              <img
                src={
                  filteredUsers?.[0]?.profileUrl
                    ? filteredUsers?.[0]?.profileUrl
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS167rCp9mKFPIQo0E5lfr9p2OIqZ2XpU9wgbDkoUC5tQ&s"
                }
                alt={filteredUsers?.[0]?.name}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="">
              <h1 className="text-primary-black xl:text-[1rem] text-base font-semibold">
                {filteredUsers?.[0]?.name}
              </h1>
              <p className="text-graylight xl:text-[.6rem] text-xs  line-clamp-1  font-medium">
                {person?.lastMessage}
              </p>
            </div>
          </div>
        </li>
      )}
    </>
  );
};
export default ChatUser;
