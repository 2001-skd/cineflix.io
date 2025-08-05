import { createBrowserRouter, Navigate } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";
import { Provider } from "react-redux";
import { appStore } from "./utils/store/appStore";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { addUser, removeUser } from "./utils/store/UserSlice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email } = user;
        dispatch(addUser, { uid: uid, displayName: displayName, email: email });
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
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
