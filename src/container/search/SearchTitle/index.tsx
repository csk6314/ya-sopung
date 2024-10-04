import { CTYPE_CONSTANT, TContentType } from "@/constant/content";

interface Props {
  areaName: string;
  keyword: string;
  contentType: TContentType;
}

const SearchTitle = ({ areaName, keyword, contentType }: Props) => {
  return (
    <h3>
      {keyword ? (
        <>
          <em>{areaName === "전체" ? "모든 지역" : areaName}</em>의{" "}
          <em>{`\`${keyword}\``}</em>에 대한 검색 결과입니다.
        </>
      ) : (
        <>
          <em>{areaName === "전체" ? "모든 지역" : areaName}</em>의{" "}
          <em>{CTYPE_CONSTANT[contentType].tag}</em> 알아보기
        </>
      )}
    </h3>
  );
};

export default SearchTitle;
