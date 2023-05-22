import { useState } from "react";
import { Button, Form, Input } from "./style.jsx";
import { ThreeDots } from "react-loader-spinner";
import api from "../../services/api.js";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const obj = { ...form };
    obj[e.target.name] = e.target.value;
    setForm(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("As senhas precisam ser iguais!");
    } else {
      setLoading(true);
      api.registerUser(form)
        .then((res) => {
          alert(res.data.message);
          navigate('/sign-in');
        })
        .catch(err => {
          alert(err.response.data.message);
          setLoading(false);
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder="Nome"
        type="text"
        onChange={handleChange}
        value={form.name}
        disabled={loading}
        required
      />
      <Input
        name="email"
        placeholder="E-mail"
        type="email"
        onChange={handleChange}
        value={form.email}
        disabled={loading}
        required
      />
      <Input
        name="password"
        placeholder="Senha"
        type="password"
        onChange={handleChange}
        value={form.password}
        disabled={loading}
        required
      />
      <Input
        name="confirmPassword"
        placeholder="Confirmar senha"
        type="password"
        onChange={handleChange}
        value={form.confirmPassword}
        disabled={loading}
        required
      />
      <Button disabled={loading}>
        {loading ? <ThreeDots
          height="13"
          width="51"
          radius="9"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
          visible={true}
        /> : "Criar Conta"}
      </Button>
    </Form>
  );
}