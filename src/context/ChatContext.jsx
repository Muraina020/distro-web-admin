import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const ChatContext = createContext(null);

const chatReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_USER":
      return {
        user: action.payload,
        chatRoomId:
          "support@distro.com.ng" > action.payload.uid
            ? "support@distro.com.ng" + "_" + action.payload.uid
            : action.payload.uid + "_" + "support@distro.com.ng",
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
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  return useContext(ChatContext);
};

export default ChatContextProvider;
