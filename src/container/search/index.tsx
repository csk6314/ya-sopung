//component
import AreaSelect from "@/components/AreaSelect";
import SearchInput from "@/components/SearchInput";
import SearchTitle from "./SearchTitle";

//style
import * as S from "./index.style";

//hook
import useParams from "@/hooks/useParams";
import SearchList from "./SearchList";

const SearchContainer = () => {
  const { contentType, keyword, area } = useParams();

  return (
    <S.Container>
      <S.Wrapper>
        <SearchTitle
          areaName={area.name}
          keyword={keyword}
          contentType={contentType}
        />
        <S.SearchDiv>
          <AreaSelect />
          <SearchInput contenttypeid={contentType} initialValue={keyword} />
        </S.SearchDiv>
        <SearchList
          areaCode={area.code}
          keyword={keyword}
          contentType={contentType}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default SearchContainer;
