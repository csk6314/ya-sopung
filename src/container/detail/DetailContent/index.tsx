import * as S from "./index.style";

interface Props {
  image: string;
  infos: object[];
}

const DATA = [
  { key: "이벤트 장소", value: "도시산림공원 트리숲" },
  { key: "운영기간", value: "2024.10.05 ~ 2024.10.05" },
  { key: "운영시간", value: "10:00 ~ 18:00" },
  { key: "주차 가능 여부", value: "가능" },
  { key: "홈페이지", value: "www.asdf.com" },
  {
    key: "상세정보",
    value:
      "국민의 생명을 보호하기 위해 헌신한 순직소방공무원을 국민과 함께 기억하고자 한다. 순직 소방공무원의 명예도로인 이병곤길에서 국민과 함께 펼치는 추모 퍼레이드와 안전체험, 추모공연과 추모전시 등이 준비되 어 있다.",
  },
  {
    key: "상세정보2",
    value:
      "국민의 생명을 보호하기 위해 헌신한 순직소방공무원을 국민과 함께 기억하고자 한다. 순직 소방공무원의 명예도로인 이병곤길에서 국민과 함께 펼치는 추모 퍼레이드와 안전체험, 추모공연과 추모전시 등이 준비되 어 있다.",
  },
];

const DetailContent = () => {
  return (
    <S.ContentWrapper>
      <S.ContentImage />
      <S.ContentDescribeBox>
        {DATA.map((data) => (
          <div key={data.key}>
            <span>{data.key}</span>
            <p>{data.value}</p>
          </div>
        ))}
      </S.ContentDescribeBox>
    </S.ContentWrapper>
  );
};

export default DetailContent;
