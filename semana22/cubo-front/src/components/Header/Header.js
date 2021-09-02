import axios from "axios";
import React, { useContext } from "react";
import { URL } from "./../../parameters/URL";
import { useForm } from "../../hooks/useForm";
import DataContext from "../../global/DataContext";
import { ButtonDisplay, HeaderDisplay, InputDisplay } from "./styled";

const initialForm = {name:"", last_name: "", participation: ""}

const Header = () => {
  const [form, handleValue] = useForm(initialForm);
  const { getData } = useContext(DataContext);

  const insertData = async (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      last_name: form.last_name,
      participation: form.participation
    };
    try {
      await axios
        .post(`${URL}/user/register`, body);
        getData();
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <HeaderDisplay>
      <form onSubmit={insertData}>
        <InputDisplay
          placeholder="insira o seu nome"
          name="name"
          type="text"
          required={true}
          onChange={handleValue}
          value={form.name}
        />
        <InputDisplay
          placeholder="insira o seu sobre nome"
          name="last_name"
          type="text"
          required={true}
          onChange={handleValue}
          value={form.last_name}
        />
        <InputDisplay
          placeholder="insira a sua participação"
          name="participation"
          type="number"
          required={true}
          onChange={handleValue}
          value={form.participation}
        />
        <ButtonDisplay>Enviar</ButtonDisplay>
      </form>
    </HeaderDisplay>
  );
};

export default Header;
