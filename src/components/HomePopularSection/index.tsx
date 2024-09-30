//component
import PopularList from "./PopularList";

//style
import * as S from "./index.style";

const HomePopularSection = () => {
  return (
    <S.Wrapper>
      <S.TitleText>인기있는 지역의 행사를 확인해보세요!</S.TitleText>
      <PopularList />
    </S.Wrapper>
  );
};

export default HomePopularSection;
