import AreaSelect from "@/components/AreaSelect";
import * as S from "./index.style";
import SearchInput from "@/components/SearchInput";
import useParams from "@/hooks/useParams";
import { CTYPE_CONSTANT } from "@/constant/content";
import useSearchList from "@/hooks/useSearchList";
import Spinner from "@/components/Spinner";
import ListItem from "@/components/ListItem";

const SearchContainer = () => {
  const { contentType, keyword, area } = useParams();

  const {
    items,
    isError,
    isFetchingNextPage,
    isLoading,
    ref: observerRef,
  } = useSearchList({
    keyword,
    areaCode: area.code,
    contentTypeId: contentType,
  });

  return (
    <S.Container>
      <S.Wrapper>
        <h3>
          {keyword ? (
            <>
              <em>{area.name === "전체" ? "모든 지역" : area.name}</em>의{" "}
              <em>'서울뮤직페스티벌'</em>에 대한 검색 결과입니다.
            </>
          ) : (
            <>
              <em>{area.name === "전체" ? "모든 지역" : area.name}</em>의{" "}
              <em>{CTYPE_CONSTANT[contentType].tag}</em> 알아보기
            </>
          )}
        </h3>
        <S.SearchDiv>
          <AreaSelect />
          <SearchInput contenttypeid={contentType} />
        </S.SearchDiv>
        <S.SearchList>
          {items.map((item) => (
            <ListItem
              contentid={item.contentid}
              key={item.contentid}
              title={item.title}
              firstimage={item.firstimage}
              addr1={item.addr1}
              addr2={item.addr2}
            />
          ))}
        </S.SearchList>
        <S.LoadingWrapper>
          {isFetchingNextPage || isLoading ? (
            <Spinner />
          ) : (
            <div ref={observerRef} />
          )}
        </S.LoadingWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default SearchContainer;
