import AreaSelect from "@/components/AreaSelect";
import * as S from "./index.style";
import SearchInput from "@/components/SearchInput";

import { useLocation } from "react-router-dom";
import { ROUTES } from "@/constant/routes";

const SearchContainer = () => {
  const { pathname } = useLocation();
  const contentType =
    ROUTES.find((route) => route.href === pathname)?.contentType ?? "15";

  return (
    <S.Container>
      <S.Wrapper>
        <h3>
          <em>서울특별시</em>의 <em>'서울뮤직페스티벌'</em>에 대한 검색
          결과입니다.
        </h3>
        <S.SearchDiv>
          <AreaSelect />
          <SearchInput contenttypeid={contentType} />
        </S.SearchDiv>
        <S.SearchList>
          {/* {items.map((item) => (
            <ListItem
              contentid={item.contentid}
              key={item.contentid}
              title={item.title}
              firstimage={item.firstimage}
              addr1={item.addr1}
              addr2={item.addr2}
            />
          ))} */}
        </S.SearchList>
        <button onClick={() => {}}>더 보기</button>
      </S.Wrapper>
    </S.Container>
  );
};

export default SearchContainer;
