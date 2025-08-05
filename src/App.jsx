import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";

const App = () => {
  return <Body />;
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default App;
