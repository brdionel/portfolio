import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};
export default Layout;
