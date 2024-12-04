import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <div className=" container m-auto h-full">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
