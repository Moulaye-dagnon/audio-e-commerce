import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface InputProps {
  label: string;
  name: string;
  id: string;
  type: HTMLInputTypeAttribute;
  value: string | number;
  placeholder: string | undefined;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
}

export function InputComponent({
  label,
  name,
  id,
  placeholder,
  type,
  value,
  handleChange,
}: InputProps) {
  return (
    <div className={`  `}>
      <label htmlFor={id} className=" text-xs font-bold  ">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className=" block w-full py-4.5 pl-6 border border-input-border focus:outline-primary-orange rounded-md cursor-pointer caret-primary-orange "
      />
    </div>
  );
}
