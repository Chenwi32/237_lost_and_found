import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />

      <main className="main_content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
