import { LikedContentInfo } from "@/hooks/useLiked";
import Thumbnail from "../Thumbnail";
import * as S from "./index.style";
import { Link } from "react-router-dom";

const LikedCard = ({
  contentId,
  title,
  addr1,
  firstimage,
}: LikedContentInfo) => {
  return (
    <Link to={`/detail/${contentId}`}>
      <S.Wrapper>
        <Thumbnail src={firstimage} usage="my" />
        <S.Describe>
          <h4>{title}</h4>
          <span>{addr1}</span>
        </S.Describe>
      </S.Wrapper>
    </Link>
  );
};

export default LikedCard;
