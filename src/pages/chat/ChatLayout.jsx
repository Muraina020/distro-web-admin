import { Link, Outlet } from "react-router-dom";
import { ChatPeople, ChatSideBar, Container, Header } from "../../components";

const ChatLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <ChatSideBar />
        <main className="ml-[6rem] min-h-[85vh] pb-5">
          <div className="flex items-start gap-x-4">
            <ChatPeople />
            <section className="bg-white rounded-[0.625rem] w-[75%] py-5">
              <Outlet />
            </section>
          </div>
        </main>
      </Container>
    </>
  );
};
export default ChatLayout;
