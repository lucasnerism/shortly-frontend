import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './contexts/userContext.jsx';
import { Container } from './styles/style.js';
import Header from './components/Header/index.jsx';
import Home from './pages/HomePage/index.jsx';
import Ranking from './pages/RankingPage/RankingPage.jsx';
import SignUp from './pages/SignUpPage/index.jsx';
import SignIn from './pages/SignInPage/index.jsx';

export default function App() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Ranking />} />
          <Route path="/go" element={<Home />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
