//component
import AreaSelect from "@/components/AreaSelect";
import SearchInput from "@/components/SearchInput";
import Spinner from "@/components/Spinner";
import ListItem from "@/components/ListItem";
import SearchTitle from "./SearchTitle";

//style
import * as S from "./index.style";

//hook
import useParams from "@/hooks/useParams";
import useSearchList from "@/hooks/useSearchList";

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
        <SearchTitle
          areaName={area.name}
          keyword={keyword}
          contentType={contentType}
        />
        <S.SearchDiv>
          <AreaSelect />
          <SearchInput contenttypeid={contentType} initialValue={keyword} />
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
