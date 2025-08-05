import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import Layout from "./Layout";

const SignUp = () => {
  return (
    <Layout>
      <section className="relative">
        <div className="bg_image">
          <img src="../src/assets/img/bg_image.jpg" alt="bg_image" />
          <div className="bg_overlay absolute top-0 left-0 bg-black w-full h-full opacity-75 overflow-hidden"></div>
        </div>

        {/* login form */}
        <div className="login_form absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black opacity-85 w-[400px] rounded-md p-3">
          <h5 className="font-extrabold tracking-wider text-white text-2xl my-2">
            Sign Up
          </h5>
          <form>
            <div className="flex items-center flex-col gap-3">
              <Input type="text" placeholder="Enter Your Name" />
              <Input type="email" placeholder="Enter Your Email" />
              <Input type="password" placeholder="Enter Your Password" />
            </div>
            <Button extraClassName="my-3">Sign Up</Button>
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
