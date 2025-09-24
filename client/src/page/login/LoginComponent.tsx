import { useState } from "react";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { Link, useLocation, useNavigate } from "react-router";
import ButtonComponent from "../../components/buttonComponent/ButtonComponent";
import useLogin from "../../hooks/auth/useLogin";
import useGetMe from "../../hooks/auth/useGetMe";
import { useAppDispatch } from "../../redux/hooks";
import { addUser } from "../../redux/user/UserSlice";
import { AnimatePresence, motion } from "motion/react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { shemaForm, type FormFilds } from "../../Types/Form.type";
function LoginComponent() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<FormFilds>({
    resolver: zodResolver(shemaForm),
  });

  const [InfoLogin, setInfoLogin] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useAppDispatch();
  const { mutate } = useLogin();
  const { refetch } = useGetMe();
  const onSubmit: SubmitHandler<FormFilds> = async (data) => {
    mutate(data, {
      onSuccess: async () => {
        const { data } = await refetch();
        dispatch(addUser(data));
        if (location.state?.redirectFromCick) {
          navigate(-1);
        } else {
          navigate("/");
        }
      },

      onError: (err: Error) => {
        setError("root", err);
      },
    });
  };
  console.log(location.state?.redirectFromCick);

  return (
    <div>
      <AnimatePresence>
        {location.state?.redirectFromCick && InfoLogin && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 1.5 }}
            className="relative rounded border border-red-400 bg-red-100 px-4 py-3  text-red-700"
            role="alert"
          >
            <strong className="font-bold">Ooohh! Desolé</strong>
            <span className="block sm:inline">
              Vous devez etre connecté pour continuer
            </span>
            <span
              onClick={() => setInfoLogin(false)}
              className="absolute top-0 right-0 bottom-0 px-4 py-3"
            >
              <svg
                className="h-6 w-6 fill-current text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      {errors.root && <p>{errors.root.message}</p>}
      <div className="mx-auto max-w-[327px]  rounded-xl bg-primary-white p-6 md:max-w-[400px] md:p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="mb-4  text-4xl">Connectez-vous</h1>
          <InputComponent<FormFilds>
            label="Email"
            type="email"
            name="email"
            id="email"
            register={register}
            error={errors.email}
          />
          <InputComponent<FormFilds>
            label="Nom"
            name="password"
            type="password"
            id="password"
            register={register}
            error={errors.password}
          />

          <ButtonComponent
            name={isSubmitting ? "Connecting" : "Connectez votre compte"}
            color="orange"
            type="submit"
            disabled={isSubmitting}
          />

          <p className="w-5/6 text-sm ">
            Pas de compte ?
            <Link
              className=" ml-2  inline-block text-primary-orange underline"
              to={"/register"}
            >
              Inscrivez-vous
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
