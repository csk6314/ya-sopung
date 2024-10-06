import { FaHeart, FaRegHeart } from "react-icons/fa";

//style
import * as S from "./index.style";

//hooks
import useLiked, { LikedContentInfo } from "@/hooks/useLiked";

const LikeButton = ({
  contentId,
  contentTypeId,
  title,
  firstimage,
  addr1,
}: LikedContentInfo) => {
  const { liked, toggleLiked } = useLiked({
    contentId,
    contentTypeId,
    title,
    firstimage,
    addr1,
  });
  return (
    <S.Wrapper onClick={toggleLiked}>
      {liked ? (
        <FaHeart color="#f75353" />
      ) : (
        <FaRegHeart color="rgba(136,136,136,0.34)" />
      )}
    </S.Wrapper>
  );
};

export default LikeButton;
