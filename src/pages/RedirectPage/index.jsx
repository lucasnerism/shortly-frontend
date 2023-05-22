import { useParams } from "react-router-dom";
import { LoadingBox } from "../RankingPage/style.jsx";
import { Oval } from "react-loader-spinner";
import colors from "../../constants/colors.js";

export default function Redirect() {
  const { shortUrl } = useParams();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const redirectLink = (shortUrl) => {
    window.location.href = `${BASE_URL}/urls/open/${shortUrl}`;
  };
  return (
    <>
      <LoadingBox>
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
      {redirectLink(shortUrl)}
    </>
  );
}