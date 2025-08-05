import Login from "./Login";
import Browse from "./Browse";
import Layout from "./Layout";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Body;
