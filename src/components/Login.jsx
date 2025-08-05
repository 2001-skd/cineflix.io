import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import Layout from "./Layout";
import { useRef, useState } from "react";
import { validateForm } from "../utils/validate";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const emailId = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  function handleLoginSubmit() {
    console.log(emailId, password);
    const message = validateForm(emailId.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // sign in logic
    signInWithEmailAndPassword(
      auth,
      emailId.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setErrorMessage("Login Successfully !");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode} ${errorMessage}`);
      });
  }
  return (
    <Layout>
      <section className="relative">
        <div className="bg_image">
          <img src="../../public/images/img/bg_image.jpg" alt="bg_image" />
          <div className="bg_overlay absolute top-0 left-0 bg-black w-full h-full opacity-75 overflow-hidden"></div>
        </div>

        {/* login form */}
        <div className="login_form absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black opacity-85 w-[400px] rounded-md p-3">
          <h5 className="font-extrabold tracking-wider text-white text-2xl my-2">
            Login
          </h5>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex items-center flex-col gap-3">
              <Input
                type="email"
                placeholder="Enter Your Email"
                ref={emailId}
              />
              <Input
                type="password"
                placeholder="Enter Your Password"
                ref={password}
              />
            </div>
            <p className="text-red-500 font-bold">{errorMessage}</p>
            <Button
              extraClassName="my-3"
              type="submit"
              onClick={handleLoginSubmit}
            >
              Login
            </Button>
          </form>

          <p className="text-white text-center">
            Don't Have an Account ?{" "}
            <Link to="/signup" className="underline">
              Create an Account
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
