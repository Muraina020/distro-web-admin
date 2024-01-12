import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ChatPeople, ChatSideBar, Container, Header } from "../../components";
import SlideInSidebar from "../../components/sidebar/SlideInSidebar";
import { chatMsg } from "../../utils/data";
import {
  collection,
  onSnapshot,
  doc,
  orderBy,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { getDatabase, ref, child, get } from "firebase/database";

const ChatLayout = () => {
  const [messages, setMessages] = useState([]);
  const [chatRooms, setChatrooms] = useState([]);

  useEffect(() => {
    const fetchChatrooms = async () => {};

    fetchChatrooms();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ChatSideBar />
        <SlideInSidebar />
        <main className="xl:ml-[6rem] min-h-[85vh] pb-5 xl:px-0 px-3">
          <div className="flex w-full md:flex-row flex-col items-start gap-x-4">
            <ChatPeople chatRooms={chatRooms} />
            <section className="bg-white rounded-[0.625rem] md:block  hidden md:w-[75%] w-full py-5">
              <Outlet />
            </section>
          </div>
        </main>
      </Container>
    </>
  );
};
export default ChatLayout;
