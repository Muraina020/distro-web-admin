import { createContext, useContext, useReducer, useState } from "react";
import { requestNotificationPermission, sendNotification } from "../firebase";
import { useEffect } from "react";

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

  useEffect(() => {
    const initNofication = async () => {
      const newToken = await requestNotificationPermission();
      setToken(newToken);
    };
    initNofication();
  }, []);

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
