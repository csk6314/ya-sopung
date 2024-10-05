import useSearchList from "@/hooks/useSearchList";
import * as S from "./index.style";
import ListItem from "@/components/ListItem";
import Spinner from "@/components/Spinner";
import { TContentType } from "@/constant/content";
import { MdOutlineSearchOff } from "react-icons/md";

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

  if (isLoading) {
    return (
      <S.LoadingWrapper>
        <Spinner />
      </S.LoadingWrapper>
    );
  }

  if (isError) {
    return <></>;
  }

  return items.length > 0 ? (
    <S.SearchList>
      <>
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
          {isFetchingNextPage ? <Spinner /> : <div ref={observerRef} />}
        </S.LoadingWrapper>
      </>
    </S.SearchList>
  ) : (
    <S.NoSearchWrapper>
      <MdOutlineSearchOff size="10rem" />
      <span>검색 결과가 없습니다.</span>
    </S.NoSearchWrapper>
  );
};

export default SearchList;
