import type { HTMLInputTypeAttribute } from "react";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  id: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<T>;
  placeholder?: string;
}

export function InputComponent<T extends FieldValues>({
  label,
  name,
  type,
  id,
  register,
  placeholder,
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
        className=" mt-2.5 block w-full py-4.5 pl-6 border border-input-border focus:outline-primary-orange rounded-md cursor-pointer caret-primary-orange "
      />
    </div>
  );
}
