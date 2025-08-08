import type { ChangeEventHandler } from "react";

interface InputProps {
  label: string;
  name: string;
  id: string;
  value: string | number;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
}

function InputRadioComponent({
  label,
  name,
  id,
  value,
  handleChange,
}: InputProps) {
  return (
    <div className="flex  justify-end items-center flex-row-reverse py-4.5 pl-6 border border-input-border hover:border-primary-orange rounded-md cursor-pointer caret-primary-orange">
      <label htmlFor={id} className=" text-sm font-bold inline-block ml-4  ">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        onChange={handleChange}
        required
        className=" accent-primary-orange"
      />
    </div>
  );
}

export default InputRadioComponent;
