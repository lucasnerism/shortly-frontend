import { Container, Navbar } from "./style.jsx";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate('/');
  };
  if (user) {
    return (
      <Container>
        <div><p className="green">Seja bem-vindo(a), {user.name}!</p></div>
        <img src={logo} alt="logo" />
        <Navbar>
          <Link to={'/'}><p>Home</p></Link>
          <Link to={'/ranking'}><p>Ranking</p></Link>
          <p onClick={logout}>Sair</p>
        </Navbar>
      </Container>
    );
  } else {
    return (
      <Container>
        <div></div>
        <img src={logo} alt="logo" />
        <Navbar>
          <Link to={"/sign-in"}><p className="green">Entrar</p></Link>
          <Link to={"/sign-up"}><p>Cadastrar-se</p></Link>
        </Navbar>
      </Container>
    );
  }

}
