import type { HTMLInputTypeAttribute } from "react";
import type {
  FieldValues,
  LiteralUnion,
  Message,
  MultipleFieldErrors,
  Path,
  Ref,
  RegisterOptions,
  UseFormRegister,
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
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<T>;
  placeholder?: string;
  error: FieldError | undefined;
}

export function InputComponent<T extends FieldValues>({
  label,
  name,
  type,
  id,
  register,
  placeholder,
  error,
}: InputProps<T>) {
  return (
    <div className="my-6  ">
      <label htmlFor={id} className=" text-xs font-bold   ">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className=" mt-2.5 block  w-full  cursor-pointer rounded-md border border-input-border py-4.5 pl-6 caret-primary-orange focus:outline-primary-orange "
      />
      {error?.message && (
        <small className=" text-red-500">{error.message}</small>
      )}
    </div>
  );
}
