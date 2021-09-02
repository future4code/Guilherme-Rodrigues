import { useState } from "react";

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const handleValue = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value});
  };
  const resetForm = () => {
    setForm(initialForm);
  };

  return [form, handleValue, resetForm];
};