//style
import * as S from "./index.style";

//component
import DetailContent from "./DetailContent";
import DetailTitle from "./DetailTitle";
import LikeButton from "@/components/Button/LikeButton";
import Button from "@/components/Button";

const Detail = () => {
  return (
    <S.DetailContainer>
      <S.Wrapper>
        <DetailTitle
          contentType={15}
          title="2024년 충주에서 1주일 살기"
          subtitle="경기도 평택시 포승읍 평택항만길 75"
        />
        <DetailContent />
        <Button skin="default">리스트로 가기</Button>
        <LikeButton liked={true} />
      </S.Wrapper>
    </S.DetailContainer>
  );
};

export default Detail;
