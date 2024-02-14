import { doc, getDocs, setDoc } from "firebase/firestore";
import { useAuthContext } from "../../context/AuthProvider";
import { db } from "../../firebase";

const ChatUserSearch = ({ user }) => {
  const { phoneNoOrEmail } = useAuthContext();

  const handleClick = async () => {
    const currentUid = "support@distro.com.ng";
    const combinedId =
      currentUid > user.uid ? currentUid + user.uid : user.uid + currentUid;

    try {
      const res = await getDocs(db, "Chatrooms", combinedId);

      if (!res.exits()) {
        await setDoc(doc, db, "Chatrooms", combinedId, {
          chatRoomId: combinedId,
          isRequestSent: false,
          lastMessage: "",
          lastMessageSenderId: "",
          lastMessageTime: "",
          unreadMessageCount: 0,
          userIds: [user.uid, currentUid],
          users: [
            {
              deletedAt: "",
              name: user.name,
              profileUrl: null,
              uid: user.uid,
            },
            {
              deletedAt: "",
              name: "Distro Support",
              profileUrl: null,
              uid: user.uid,
            },
          ],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li
      onClick={handleClick}
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
        <h5 className="font-medium text-base capitalize">{user.name}</h5>
      </div>
    </li>
  );
};
export default ChatUserSearch;
