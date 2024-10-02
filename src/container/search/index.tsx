import AreaSelect from "@/components/AreaSelect";
import * as S from "./index.style";
import SearchInput from "@/components/SearchInput";
import ListItem from "@/components/ListItem";
const SearchContainer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <h3>
          <em>서울특별시</em>의 <em>'서울뮤직페스티벌'</em>에 대한 검색
          결과입니다.
        </h3>
        <S.SearchDiv>
          <AreaSelect />
          <SearchInput />
        </S.SearchDiv>
        <S.SearchList>
          <ListItem />
        </S.SearchList>
      </S.Wrapper>
    </S.Container>
  );
};

export default SearchContainer;
