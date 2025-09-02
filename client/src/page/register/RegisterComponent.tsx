import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import ButtonComponent from "../../components/buttonComponent/ButtonComponent";
import useRegisterMutation from "../../hooks/auth/useRegisterMutation";
export function RegisterComponent() {
  const [valueInput, setValueInput] = useState({
    username: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });
  const navigate = useNavigate();
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValueInput({ ...valueInput, [name]: value });
  };
  const { mutate } = useRegisterMutation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valueInput.password === valueInput.ConfirmPassword) {
      mutate(
        {
          email: valueInput.email,
          name: valueInput.username,
          password: valueInput.password,
        },
        {
          onSuccess: (data) => {
            console.log(data);

            navigate("/login");
          },
          onError: (err) => {
            console.log(err);
          },
        }
      );
    }
  };

  return (
    <div>
      <div className="max-w-[327px] md:max-w-[400px]  mx-auto bg-semi-dark-blue rounded-xl p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          <div className="text-4xl  mb-4">Sign Up</div>
          <InputComponent
            label="Username"
            type={"text"}
            name={"username"}
            id={"username"}
            value={valueInput.username}
            handleChange={handleOnchange}
            placeholder={"Username address"}
          />
          <InputComponent
            label="Email"
            type={"email"}
            name={"email"}
            id={"email"}
            value={valueInput.email}
            handleChange={handleOnchange}
            placeholder={"Email address"}
          />
          <InputComponent
            id="password"
            label="Password"
            type={"password"}
            name={"password"}
            value={valueInput.password}
            handleChange={handleOnchange}
            placeholder={"Password"}
          />
          <InputComponent
            id="ConfirmPassword"
            label="Confirm password"
            type={"password"}
            name={"ConfirmPassword"}
            value={valueInput.ConfirmPassword}
            handleChange={handleOnchange}
            placeholder={"Repeat Password"}
          />

          <ButtonComponent
            name="Create an account"
            color="orange"
            type="submit"
          />
          <p className="w-5/6 text-xm mx-auto">
            Alread have an account?
            <Link className=" inline-block ml-2 text-red" to={"/login"}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
