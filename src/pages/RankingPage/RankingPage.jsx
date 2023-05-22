import { FaTrophy } from "react-icons/fa";
import { Container, LoadingBox, Rankings } from "./style.jsx";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext.jsx";
import { Oval } from "react-loader-spinner";
import colors from "../../constants/colors.js";
import api from "../../services/api.js";

export default function Ranking() {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await api.getRanking();
        setRanking(response.data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <span><FaTrophy color="#FFD233" size={"50px"} /><h1>Ranking</h1></span>
      {loading ? <LoadingBox>
        <Oval
          height={80}
          width={80}
          color={colors.primary_color}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor={colors.secondary_color}
          strokeWidth={2}
          strokeWidthSecondary={2}

        /></LoadingBox>
        :
        <Rankings>
          {ranking?.map((el, index) =>
            <li key={el.id}><strong><p>{`${index + 1}. ${el.name} -`}</p></strong><p>&nbsp;{`${el.linksCount} links - ${el.visitCount} visualizações`}</p></li>
          )}
        </Rankings>
      }
      <h1>{user ? "" : "Crie sua conta para usar nosso serviço!"}</h1>
    </Container>
  );
}