import { Link, useNavigate } from "react-router";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import ButtonComponent from "../../components/buttonComponent/ButtonComponent";
import useRegisterMutation from "../../hooks/auth/useRegisterMutation";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { RegisterType } from "../../Types/Form.type";
export function RegisterComponent() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<RegisterType>();

  const navigate = useNavigate();

  const { mutate } = useRegisterMutation();
  const onSubmit: SubmitHandler<RegisterType> = async (data) => {
    if (data.password === data.ConfirmPassword) {
      mutate(
        {
          email: data.email,
          name: data.name,
          password: data.password,
        },
        {
          onSuccess: () => {
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-4xl  mb-4">Inscrivez-vous</h1>
          <InputComponent<RegisterType>
            label="Nom"
            type="text"
            name="name"
            id="nom"
            register={register}
            placeholder={"Votre nom"}
          />
          <InputComponent<RegisterType>
            label="Email"
            type="email"
            name="email"
            id="email"
            register={register}
            placeholder={"Votre adresse email "}
          />
          <InputComponent<RegisterType>
            id="password"
            label="Password"
            name="password"
            type={"password"}
            register={register}
            placeholder={"Mot de passe"}
          />
          <InputComponent<RegisterType>
            id="ConfirmPassword"
            label="Confirm password"
            type={"password"}
            name="ConfirmPassword"
            register={register}
            placeholder={"Confirmer Votre mot de passe"}
          />

          <ButtonComponent
            name={isSubmitting ? "Creating..." : "Créer un compte"}
            color="orange"
            type="submit"
            disabled={isSubmitting}
          />
          <p className="w-5/6 text-xm mx-auto">
            Déjà un compte?
            <Link className=" inline-block ml-2 text-red" to={"/login"}>
              Connectez-vous
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
