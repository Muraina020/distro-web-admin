import { createContext, useContext, useReducer, useState } from "react";

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

const ChatContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    chatRoomId: null,
    user: {},
  };
  const [state, dispatch] = useReducer(ChatReducer, INITIAL_STATE);
  const [select, setSelect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChatContext.Provider
      value={{ ...state, dispatch, setSelect, select, isOpen, setIsOpen }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  return useContext(ChatContext);
};

export default ChatContextProvider;
