import { createContext, useContext, useReducer, useState } from "react";
import { db, requestNotificationPermission } from "../firebase";
import { useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useAuthContext } from "./AuthProvider";

const ChatContext = createContext(null);

const ChatReducer = (state, action) => {
  const { phoneNoOrEmail: currentUid } = JSON.parse(
    localStorage.getItem("user")
  );

  switch (action.type) {
    case "CHANGE_USER":
      return {
        user: action.payload,
        chatRoomId:
          currentUid > action.payload.uid
            ? currentUid + "_" + action.payload.uid
            : action.payload.uid + "_" + currentUid,
      };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  chatRoomId: null,
  user: {},
};

const ChatContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ChatReducer, INITIAL_STATE);
  const [select, setSelect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(state.chatRoomId);
  const [token, setToken] = useState(null);
  const {
    admin: { phoneNoOrEmail: currentUid },
  } = useAuthContext();

  useEffect(() => {
    const initNofication = async () => {
      const newToken = await requestNotificationPermission();
      console.log(newToken);
      setToken(newToken);
    };

    initNofication();

    // listen for incoming messsage
    const messagesRef = collection(db, "Chatrooms");
    const q = query(
      messagesRef,
      where("userIds", "array-contains", currentUid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const message = change.doc.data();
          const sender = message.users.find((user) => user.uid !== currentUid);
          console.log(sender);

          displayNotification(sender.name, message.text);
        }
      });
    });

    return () => unsubscribe();
  }, [currentUid]);

  const displayNotification = (sender, message) => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      new Notification(`${sender} sent you a new message`, { body: message });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(`${sender} sent you a new message`, {
            body: message,
          });
        }
      });
    }
  };

  return (
    <ChatContext.Provider
      value={{
        ...state,
        dispatch,
        setSelect,
        select,
        isOpen,
        setIsOpen,
        active,
        setActive,
        token,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  return useContext(ChatContext);
};

export default ChatContextProvider;
