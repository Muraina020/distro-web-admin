import { Outlet } from "react-router-dom";
import { Container, Header, Sidebar } from "../components";

const HomeLayouts = () => {
  return (
    <>
      <Container>
        <Header />
        <div className="grid   pr-8 pb-8">
          <Sidebar />
          <main className="xl:ml-[25rem] ">
            <Outlet />
          </main>
        </div>
      </Container>
    </>
  );
};
export default HomeLayouts;
