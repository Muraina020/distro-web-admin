import { Outlet, useNavigation } from "react-router-dom";
import { Container, Header, Sidebar } from "../components";
import SlideInSidebar from "../components/sidebar/SlideInSidebar";
import Loading from "../components/ui/Loading";

const HomeLayouts = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Container>
        <Header />
        <div className="xl:pr-8 lg:px-0  px-3 pb-8">
          <Sidebar />
          <SlideInSidebar />
          <main className="xl:ml-[25rem] lg:ml-[20rem]">
            {isPageLoading ? <Loading /> : <Outlet />}
          </main>
        </div>
      </Container>
    </>
  );
};
export default HomeLayouts;
