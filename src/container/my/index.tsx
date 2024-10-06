import { getLikedList } from "@/hooks/useLiked";
import * as S from "./index.style";
import LikedList from "./LikedList";

const My = () => {
  const likedList = getLikedList();

  console.log("gg");

  return (
    <S.MyContainer>
      <S.MyPageTitle>
        안녕하세요,
        <br /> <b>홍길동님!</b>
      </S.MyPageTitle>

      <S.MySection>
        <h3>내가 찜한 행사 목록</h3>
        <LikedList
          likeds={likedList.filter((content) => content.contentTypeId === "15")}
        />
      </S.MySection>

      <S.MySection>
        <h3>내가 찜한 숙소 목록</h3>
        <LikedList
          likeds={likedList.filter((content) => content.contentTypeId === "32")}
        />
      </S.MySection>

      <S.MySection>
        <h3>내가 찜한 관광지 목록</h3>
        <LikedList
          likeds={likedList.filter((content) => content.contentTypeId === "12")}
        />
      </S.MySection>
    </S.MyContainer>
  );
};

export default My;
