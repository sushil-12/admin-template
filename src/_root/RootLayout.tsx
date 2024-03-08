import { Outlet } from "react-router";
import TopBar from "../components/shared/TopBar";
import LeftSidebar from "../components/shared/LeftSidebar";
import BottomBar from "../components/shared/BottomBar";

const RootLayout = () => {
  
  return (
    <div className="w-full md:flex">
      <TopBar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet  />
      </section>
      <BottomBar />
    </div>
  );
};

export default RootLayout;
