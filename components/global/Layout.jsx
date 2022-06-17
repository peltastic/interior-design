import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <NavMobile />
      {children}
    </>
  );
};

export default Layout;
