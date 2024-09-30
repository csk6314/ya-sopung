import { FaHeart, FaRegHeart } from "react-icons/fa";
import * as S from "./index.style";

interface Props {
  liked: boolean;
}
const LikeButton = ({ liked }: Props) => {
  return (
    <S.Wrapper>
      {liked ? (
        <FaHeart color="#f75353" />
      ) : (
        <FaRegHeart color="rgba(136,136,136,0.34)" />
      )}
    </S.Wrapper>
  );
};

export default LikeButton;
