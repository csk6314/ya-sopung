//style
import * as S from "./index.style";

//component
import LikedList from "./LikedList";

const My = () => {
  return (
    <S.MyContainer>
      <S.MyPageTitle>
        안녕하세요,
        <br /> <b>홍길동님!</b>
      </S.MyPageTitle>

      <LikedList contentTypeId="15" />
      <LikedList contentTypeId="32" />
      <LikedList contentTypeId="12" />
    </S.MyContainer>
  );
};

export default My;
