import { Link } from "react-router";
import { InputComponent } from "../../components/InputComponent/InputComponent";

function LoginComponent() {
  return (
    <div>
      {/* // <Logo /> */}
      <div className="max-w-[327px] md:max-w-[400px]  mx-auto bg-semi-dark-blue rounded-xl p-6 md:p-8">
        <form>
          <div className="text-4xl  mb-4">Login</div>
          <InputComponent
            id="test"
            type="text"
            placeholder="nom"
            value={"nom"}
            name="test"
            label="nom"
          />
          <InputComponent
            id="test"
            type="text"
            placeholder="nom"
            value={"nom"}
            name="test"
            label="nom"
          />

          <button
            type="submit"
            className="w-full cursor-pointer hover:bg-white hover:text-semi-dark-blue py-[13px] bg-red rounded-md text-center font-medium  mt-5 mb-6"
          >
            Login your account
          </button>
          <p className="w-5/6 text-xm mx-auto">
            Don’t have an account?
            <Link className=" inline-block ml-2 text-red" to={"/register"}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
