import { Outlet } from "react-router-dom";
import { Container, Header, Sidebar } from "../components";
 
const HomeLayouts = () => {
  return (
    <>
      <Container>
        <Header />
        <div className="xl:pr-8 lg:px-0  pb-8">
          <Sidebar />
          <main className="xl:ml-[25rem] lg:ml-[20rem]">
            <Outlet />
          </main>
        </div>
      </Container>
    </>
  );
};
export default HomeLayouts;