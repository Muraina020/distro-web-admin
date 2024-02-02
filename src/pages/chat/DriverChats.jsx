import React, { useEffect, useState } from "react";
import { chatMsg } from "../../utils/data";
import {
  collection,
  onSnapshot,
  where,
  query,
  orderBy,
  doc,
} from "firebase/firestore";

import { db } from "../../firebase";
import ChatInput from "../../components/chat/ChatInput";
import { useChatContext } from "../../context/ChatContext";
import Message from "../../components/chat/Message";
import { ArrowBackIcon } from "@chakra-ui/icons";

const DriverChats = () => {
  const { user, chatRoomId, setSelect, select } = useChatContext();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!db || !chatRoomId) {
      console.error("Invalid db or chatRoomId");
      return;
    }

    const messagesCollection = collection(
      db,
      "Chatrooms",
      chatRoomId,
      "Messages"
    );
    const q = query(messagesCollection, orderBy("createdOn"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setMessages(messagesData);
    });

    return () => {
      unsubscribe();
    };
  }, [chatRoomId]);

  const formatDate = (timestamp) => {
    if (!timestamp) {
      return "";
    }
    const today = new Date();
    const messageDate = timestamp.toDate();

    if (isSameDay(today, messageDate)) {
      return "Today";
    } else if (isYesterday(today, messageDate)) {
      return "Yesterday";
    } else if (isWithinOneWeek(today, messageDate)) {
      return messageDate.toLocaleDateString("en-US", { weekday: "long" });
    } else {
      return messageDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
  };

  const isSameDay = (date1, date2) => {
    if (!date1 || !date2) {
      return "";
    }
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isYesterday = (today, messageDate) => {
    if (!today || !messageDate) {
      return "";
    }
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return isSameDay(yesterday, messageDate);
  };

  const isWithinOneWeek = (today, messageDate) => {
    if (!today || !messageDate) {
      return "";
    }
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);
    return messageDate >= oneWeekAgo;
  };

  return (
    <>
      <div className={`md:block ${!select && "hidden"}`}>
        <div className="flex items-center border-b px-4 pb-1 justify-between">
          <div className="flex gap-x-4 items-center">
            <div className=" md:w-[3rem] w-[2rem]  md:h-[3rem] h-[2rem] rounded-full">
              <img
                src={
                  user.profileUrl
                    ? user.profileUrl
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS167rCp9mKFPIQo0E5lfr9p2OIqZ2XpU9wgbDkoUC5tQ&s"
                }
                alt={user.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h1 className="xl:text-[1.2rem] md:text-[1.1rem] text-base leading-[1.32213rem]  text-primary-black font-semibold">
                {user.name}
              </h1>
              <h6 className="text-primary-default xl:text-[1rem] mt-1 text-sm font-medium">
                Active
              </h6>
            </div>
          </div>
          <button onClick={() => setSelect(false)} className="md:hidden block">
            <ArrowBackIcon />
          </button>
        </div>

        <article className="flex flex-col h-[68vh]  overflow-y-auto">
          <div className="flex-grow pb-4">
            <div className="px-4 mt-2">
              <div className="flex flex-col">
                {messages.map((chat, index) => {
                  return (
                    <React.Fragment key={chat.id}>
                      {index === 0 ||
                      !isSameDay(
                        chat.data?.createdOn?.toDate(),
                        messages[index - 1].data?.createdOn?.toDate()
                      ) ? (
                        <div className="grid place-items-center">
                          <div className="py-1 px-3 sm:text-sm text-xs bg-neutral-200 inline-block my-3  rounded-md">
                            {formatDate(chat?.data?.createdOn)}
                          </div>
                        </div>
                      ) : null}
                      <Message chat={chat} />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="px-3 bg-white  w-full  sticky bottom-0">
            <ChatInput />
          </div>
        </article>
      </div>
    </>
  );
};
export default DriverChats;
