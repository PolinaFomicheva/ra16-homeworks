import { React, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function TollbarForm() {
  const clearForm = { login: "", password: "" };
  const [form, setForm] = useState(clearForm);
  const { btnChangeForm } = useContext(AuthContext);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    btnChangeForm(form);
    setForm(clearForm);
  };

  return (
    <form onSubmit={handleForm}>
      <input
        type='text'
        value={form.login}
        name='login'
        placeholder='Username'
        onChange={handleChange}
      />
      <input
        type='text'
        name='password'
        value={form.password}
        placeholder='Password'
        onChange={handleChange}
      />
      <button>Login</button>
    </form>
  );
}
