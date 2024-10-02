import * as S from "./index.style";
import LikedList from "./LikedList";

const LIKED_FESTIVAL = [
  {
    id: 0,
    title: "서울뮤직페스티벌페스티벌",
    date: "2024.09.12",
    place: "서울시 노원구",
    imgURL:
      "https://i.namu.wiki/i/hkDOgJHC40yiIFKQDRz7YjHpzWrL9vCTT7mve4TF6Lj-GpGsBpvT8WlXbwOT_To1Ndl1zKrVLQ-SiwaGNFOgQA.webp",
  },
  {
    id: 1,
    title: "서울뮤직페스티벌",
    date: "2024.09.12",
    place: "서울시 노원구",
    imgURL:
      "https://i.namu.wiki/i/hkDOgJHC40yiIFKQDRz7YjHpzWrL9vCTT7mve4TF6Lj-GpGsBpvT8WlXbwOT_To1Ndl1zKrVLQ-SiwaGNFOgQA.webp",
  },
  {
    id: 2,
    title: "t",
    date: "2024",
    place: "서울시",
    imgURL:
      "https://i.namu.wiki/i/hkDOgJHC40yiIFKQDRz7YjHpzWrL9vCTT7mve4TF6Lj-GpGsBpvT8WlXbwOT_To1Ndl1zKrVLQ-SiwaGNFOgQA.webp",
  },
  {
    id: 3,
    title: "서울뮤직페스티벌",
    date: "2024.09.12",
    place: "서울시 노원구",
    imgURL:
      "https://i.namu.wiki/i/hkDOgJHC40yiIFKQDRz7YjHpzWrL9vCTT7mve4TF6Lj-GpGsBpvT8WlXbwOT_To1Ndl1zKrVLQ-SiwaGNFOgQA.webp",
  },
  {
    id: 4,
    title: "서울뮤직페스티벌",
    date: "2024.09.12",
    place: "서울시 노원구",
    imgURL:
      "https://i.namu.wiki/i/hkDOgJHC40yiIFKQDRz7YjHpzWrL9vCTT7mve4TF6Lj-GpGsBpvT8WlXbwOT_To1Ndl1zKrVLQ-SiwaGNFOgQA.webp",
  },
];

const My = () => {
  return (
    <S.MyContainer>
      <S.MyPageTitle>
        안녕하세요,
        <br /> <b>홍길동님!</b>
      </S.MyPageTitle>

      <S.MySection>
        <h3>내가 찜한 행사 목록</h3>
        <LikedList likeds={LIKED_FESTIVAL} />
      </S.MySection>

      <S.MySection>
        <h3>내가 찜한 숙소 목록</h3>
      </S.MySection>

      <S.MySection>
        <h3>내가 찜한 관광지 목록</h3>
      </S.MySection>
    </S.MyContainer>
  );
};

export default My;
