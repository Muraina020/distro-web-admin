import { doc, setDoc, getDoc, addDoc, Timestamp } from "firebase/firestore";
import { useAuthContext } from "../../context/AuthProvider";
import { db } from "../../firebase";
import { useChatContext } from "../../context/ChatContext";
import { useMediaQuery } from "@uidotdev/usehooks";

const ChatUserSearch = ({ user, onclick }) => {
  const isMediumDevice = useMediaQuery("only screen and (min-width : 768px)");

  const {
    admin: { phoneNoOrEmail: currentUid },
  } = useAuthContext();
  const { dispatch, setSelect, setActive, token } = useChatContext();

  const handleSelectUser = (u, id) => {
    dispatch({ type: "CHANGE_USER", payload: u });
    setActive(id);

    if (!isMediumDevice) {
      setSelect(true);
    }
  };

  async function handleClick() {
    const combinedId =
      currentUid > user.uid
        ? currentUid + "_" + user.uid
        : user.uid + "_" + currentUid;

    const docRef = doc(db, "Chatrooms", combinedId);
    const res = await getDoc(docRef);

    try {
      if (!res.exists()) {
        await setDoc(doc(db, "Chatrooms", combinedId), {
          chatRoomId: combinedId,
          isRequestSent: false,
          lastMessage: "",
          lastMessageSenderId: "",
          lastMessageTime: "",
          unreadMessageCount: 0,
          userIds: [currentUid, user.uid],
          users: [
            {
              deletedAt: Timestamp.now(),
              name: user.name,
              profileUrl: null,
              uid: user.uid,
              fcmToken: "",
            },
            {
              deletedAt: Timestamp.now(),
              name: "Distro Support",
              profileUrl: null,
              uid: currentUid,
              fcmToken: token,
            },
          ],
        });
      }
      handleSelectUser(user, combinedId);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <li
      onClick={() => {
        onclick();
        handleClick();
      }}
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
