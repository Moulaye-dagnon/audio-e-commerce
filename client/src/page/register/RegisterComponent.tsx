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
    formState: { isSubmitting, errors },
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
      <div className="mx-auto max-w-[327px]  rounded-xl bg-primary-white p-6 md:max-w-[400px] md:p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="mb-4  text-4xl">Inscrivez-vous</h1>
          <InputComponent<RegisterType>
            label="Nom"
            type="text"
            name="name"
            id="nom"
            register={register}
            placeholder={"Votre nom"}
            error={errors.name}
          />
          <InputComponent<RegisterType>
            label="Email"
            type="email"
            name="email"
            id="email"
            register={register}
            placeholder={"Votre adresse email "}
            error={errors.email}
          />
          <InputComponent<RegisterType>
            id="password"
            label="Password"
            name="password"
            type={"password"}
            register={register}
            placeholder={"Mot de passe"}
            error={errors.password}
          />
          <InputComponent<RegisterType>
            id="ConfirmPassword"
            label="Confirm password"
            type={"password"}
            name="ConfirmPassword"
            register={register}
            placeholder={"Confirmer Votre mot de passe"}
            error={errors.ConfirmPassword}
          />

          <div className="w-full">
            <ButtonComponent
              name={isSubmitting ? "Creating..." : "Créer un compte"}
              color="orange"
              type="submit"
              disabled={isSubmitting}
            />
          </div>
          <p className="mx-auto w-5/6 text-xs">
            Déjà un compte?
            <Link className="  inline-block text-primary-orange" to={"/login"}>
              Connectez-vous
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
