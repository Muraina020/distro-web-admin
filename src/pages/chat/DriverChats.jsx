import { useEffect, useState } from "react";
import { chatMsg } from "../../utils/data";
import {
  collection,
  onSnapshot,
  orderBy,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";
import ChatInput from "../../components/chat/ChatInput";

const DriverChats = () => {
  const [messages, setMessages] = useState([]);
  console.log(messages);

  useEffect(() => {
    const q = query(collection(db, "Chatrooms"), orderBy("lastMessageTime"));

    const unsubscribe = onSnapshot(q, (querySnapShot) => {
      let _messages = [];
      querySnapShot.forEach((doc) => {
        _messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(_messages);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="md:block  hidden">
        <div className="flex gap-x-4 items-center border-b px-4 pb-1">
          <div className=" md:w-[3rem] w-[2rem]  md:h-[3rem] h-[2rem] rounded-full">
            <img
              src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?size=626&ext=jpg&ga=GA1.1.1239515754.1699101641&semt=sph"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h1 className="xl:text-[1.2rem] md:text-[1.1rem] text-base leading-[1.32213rem]  text-primary-black font-semibold">
              Jane Cooper
            </h1>
            <h6 className="text-primary-default xl:text-[1rem] mt-1 text-sm font-medium">
              Active
            </h6>
          </div>
        </div>

        <article className="flex flex-col h-[68vh]  overflow-y-auto">
          <div className="flex-grow">
            <div className="divider">Fri, Jul 28</div>

            <h4 className="text-center text-[0.875rem] text-primary-black">
              I’m having issues with my account
            </h4>

            <div className="px-4 mt-2">
              <div className="space-y-5">
                {chatMsg.map((chat, i) => {
                  return (
                    <div key={i} className=" flex items-start gap-x-2">
                      <div className="xl:w-[2.5rem] flex-shrink-0 w-[1.9rem] xl:h-[2.5rem] h-[1.9rem]">
                        <img
                          src={chat.img}
                          alt=""
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>

                      <div className="w-[37.8125rem]">
                        <h1 className="text-primary-black xl:text-[1rem] text-base font-semibold">
                          {chat.name}
                          <span className="xl:text-[0.775rem] text-xs text-graylight ml-1.5">
                            {chat.time}
                          </span>
                        </h1>

                        <p className="mt-1 text-gray-600 xl:text-[1rem] text-sm leading-[1.875rem]">
                          {chat.msg}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="text-[0.875rem] text-center mt-1">
                Jane Cooper ended the chat
              </p>
            </div>
          </div>
          <div className="px-3 bg-white  w-full py-3  sticky bottom-0">
            <ChatInput />
          </div>
        </article>
      </div>
    </>
  );
};
export default DriverChats;
