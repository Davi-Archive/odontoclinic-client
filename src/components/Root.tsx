import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <>
    <div className="wrapper-main-root">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  );
};

export default Root;
