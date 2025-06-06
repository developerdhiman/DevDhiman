import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
