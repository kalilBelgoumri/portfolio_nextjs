import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, name }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header name={name} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;