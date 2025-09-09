import type { MouseEventHandler } from "react";
import type {
  Path,
  FieldValues,
  UseFormRegister,
  LiteralUnion,
  RegisterOptions,
  Ref,
  MultipleFieldErrors,
  Message,
} from "react-hook-form";

export type FieldError = {
  type: LiteralUnion<keyof RegisterOptions, string>;
  root?: FieldError;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};
interface InputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  id: string;
  value: string | number;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  Onclick?: MouseEventHandler<HTMLInputElement> | undefined;
}

function InputRadioComponent<T extends FieldValues>({
  label,
  name,
  id,
  value,
  register,
  error,
  Onclick,
}: InputProps<T>) {
  return (
    <div className="flex  cursor-pointer flex-row-reverse items-center justify-end rounded-md border border-input-border py-4.5 pl-6 caret-primary-orange hover:border-primary-orange">
      <label htmlFor={id} className=" ml-4 inline-block text-sm font-bold  ">
        {label}
      </label>
      <input
        id={id}
        type="radio"
        value={value}
        {...register(name)}
        onClick={Onclick}
        className=" accent-primary-orange"
      />
      {error?.message && (
        <small className=" bg-red-300 ">{error.message}</small>
      )}
    </div>
  );
}

export default InputRadioComponent;
