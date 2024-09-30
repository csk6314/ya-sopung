import Button from "../Button";
import LikeButton from "../Button/LikeButton";
import * as S from "./index.style";

const ListItem = () => {
  return (
    <S.Wrapper>
      <S.Thumbnail />
      <S.Description>
        <h3>서울 뮤직 페스티벌</h3>
        <span>2024.09.12</span>
        <span>서울시 노원구</span>
        <p>
          워케이션 프로그램은 근로자가 여행과 휴가를 동시에 즐기는 워케이션을
          하며 지원 혜택을 받을 수 있는 프로그램입니다.워케이션 프로그램은
          근로자가 여행과 휴가를 동시에 즐기는 워케이션을 하며 지원 혜택을 받을
        </p>
      </S.Description>
      <S.UserItems>
        <LikeButton liked={true} />
        <Button skin="primary">상세보기</Button>
        <Button skin="default">D - 55</Button>
      </S.UserItems>
    </S.Wrapper>
  );
};

export default ListItem;
