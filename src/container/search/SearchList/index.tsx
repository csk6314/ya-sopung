import useSearchList from "@/hooks/useSearchList";
import * as S from "./index.style";
import ListItem from "@/components/ListItem";
import Spinner from "@/components/Spinner";
import { TContentType } from "@/constant/content";

interface Props {
  keyword: string;
  areaCode: string;
  contentType: TContentType;
}

const SearchList = ({ keyword, areaCode, contentType }: Props) => {
  const {
    items,
    isError,
    isFetchingNextPage,
    isLoading,
    ref: observerRef,
  } = useSearchList({
    keyword,
    areaCode,
    contentTypeId: contentType,
  });

  return (
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
      <S.LoadingWrapper>
        {isFetchingNextPage || isLoading ? (
          <Spinner />
        ) : (
          <div ref={observerRef} />
        )}
      </S.LoadingWrapper>
    </S.SearchList>
  );
};

export default SearchList;
