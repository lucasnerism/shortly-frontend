import { useContext, useEffect, useState } from "react";
import { Container, List, ListItem, ShortLink } from "./style.jsx";
import { FaExternalLinkSquareAlt, FaTrashAlt } from "react-icons/fa";
import colors from "../../constants/colors.js";
import api from "../../services/api.js";
import { UserContext } from "../../contexts/userContext.jsx";

export default function Home() {
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState("");
  const { user } = useContext(UserContext);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const handleClick = () => {
    api.shortenLink({ url: link }, user.token)
      .then(() => {
        setLink("");
        fetchData();
      })
      .catch(err => alert(err));
  };

  const fetchData = async () => {
    try {
      const data = await api.getUser(user.token);
      setLinks(data.data.shortenedUrls);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleDelete = (id) => {
    api.deleteLink(id, user.token)
      .then((res) => {
        alert("Url excluída com sucesso");
        fetchData();
      })
      .catch(err => err.response.data.message);
  };

  const handleGoToLink = (shortUrl) => {
    window.open(`${BASE_URL}/urls/open/${shortUrl}`);
  };

  return (
    <Container>
      <ShortLink>
        <input type="text" placeholder="Links que cabem no bolso" value={link} onChange={handleChange} />
        <button onClick={handleClick}>Encurtar link</button>
      </ShortLink>
      <List>
        {links?.map(el => <ListItem key={el.id}>
          <div>
            <p>{el.url}</p>
            <p onClick={() => handleGoToLink(el.shortUrl)}>{el.shortUrl}</p>
            <p>{`Quantidade de visitantes:${el.visitCount}`}</p>
          </div>
          <div className="delete" onClick={() => handleDelete(el.id)}><FaTrashAlt color={colors.red} size="26px" /></div>
        </ListItem>)}
      </List>
    </Container>
  );
}