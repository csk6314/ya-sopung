//style
import * as S from "./index.style";

//component
import DetailContent from "./DetailContent";
import LikeButton from "@/components/Button/LikeButton";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <S.DetailContainer>
      <S.Wrapper>
        <DetailContent />
        <Button
          skin="default"
          onClick={() => {
            navigate(-1);
          }}
        >
          리스트로 가기
        </Button>
        <LikeButton liked={true} />
      </S.Wrapper>
    </S.DetailContainer>
  );
};

export default Detail;
