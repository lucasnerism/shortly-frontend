import { useContext, useState } from "react";
import { Button, Form, Input } from "../SignUpPage/style.jsx";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";
import { UserContext } from "../../contexts/userContext.jsx";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const obj = { ...form };
    obj[e.target.name] = e.target.value;
    setForm(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api.authUser(form)
      .then((res) => {
        const obj = { name: res.data.name, token: res.data.token };
        setUser(obj);
        localStorage.setItem("user", JSON.stringify(obj));
        navigate('/');
      })
      .catch(err => {
        alert(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <Button disabled={loading}>
        {loading ? <ThreeDots
          height="13"
          width="51"
          radius="9"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
          visible={true}
        /> : "Entrar"}
      </Button>
    </Form>
  );
}