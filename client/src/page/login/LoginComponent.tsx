import React, { useState } from "react";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { Link, useNavigate } from "react-router";
import ButtonComponent from "../../components/buttonComponent/ButtonComponent";
import useLogin from "../../hooks/auth/useLogin";

function LoginComponent() {
  const [valueInput, setValueInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValueInput({ ...valueInput, [name]: value });
  };
  const { mutate } = useLogin();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(valueInput, {
      onSuccess: (data) => {
        console.log(data);

        navigate("/");
      },
      onError: (err) => console.log(err),
    });
  };

  return (
    <div>
      <div className="max-w-[327px] md:max-w-[400px]  mx-auto bg-semi-dark-blue rounded-xl p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          <div className="text-4xl  mb-4">Login</div>
          <InputComponent
            label="Email"
            type="email"
            name="email"
            id="email"
            value={valueInput.email}
            handleChange={handleOnchange}
            placeholder={"Email address"}
          />
          <InputComponent
            label="Nom"
            name="password"
            type="password"
            id="password"
            value={valueInput.password}
            handleChange={handleOnchange}
            placeholder={"Password"}
          />

          <ButtonComponent
            name="Login your account"
            color="orange"
            type="submit"
          />

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
