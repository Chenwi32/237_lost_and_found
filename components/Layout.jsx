import BreadCrumbs from "./BreadCrumbs";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navigation />
      <BreadCrumbs/>
      <main className="main_content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
