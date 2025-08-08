import { useState } from "react";
interface FormProps {
  initiaValue: object;
  onSubmit: (e: object) => void;
}

const useForm = ({ initiaValue, onSubmit }: FormProps) => {
  const [inputValue, setInputValue] = useState(initiaValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValue);
    // setInputValue(initiaValue);
  };

  return {
    inputValue,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
