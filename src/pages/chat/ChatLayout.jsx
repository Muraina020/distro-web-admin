import { Link, Outlet } from "react-router-dom";
import { ChatPeople, ChatSideBar, Container, Header } from "../../components";

const ChatLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <ChatSideBar />
        <main className="xl:ml-[6rem] min-h-[85vh] pb-5 xl:px-0 px-3">
          <div className="flex w-full md:flex-row flex-col items-start gap-x-4">
            <ChatPeople />
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
