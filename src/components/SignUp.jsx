import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import Layout from "./Layout";
import { useRef, useState } from "react";
import { validateForm } from "../utils/validate";

const SignUp = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSignUpSubmit() {
    const message = validateForm(email.current.value, password.current.value);
    // console.log(errorMessage);
    setErrorMessage(message);
  }
  return (
    <Layout>
      <section className="relative">
        <div className="bg_image">
          <img src="../../public/images/img" alt="bg_image" />
          <div className="bg_overlay absolute top-0 left-0 bg-black w-full h-full opacity-75 overflow-hidden"></div>
        </div>

        {/* login form */}
        <div className="login_form absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black opacity-85 w-[400px] rounded-md p-3">
          <h5 className="font-extrabold tracking-wider text-white text-2xl my-2">
            Sign Up
          </h5>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex items-center flex-col gap-3">
              <Input type="text" placeholder="Enter Your Name" ref={name} />
              <Input type="email" placeholder="Enter Your Email" ref={email} />
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
              onClick={handleSignUpSubmit}
            >
              Sign Up
            </Button>
          </form>

          <p className="text-white text-center">
            Already Have an Account ?{" "}
            <Link to="/login" className="underline">
              Sign In
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default SignUp;
