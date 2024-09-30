import { useState } from "react";

//components
import AreaSelect from "../AreaSelect";
import CategoryTab from "./CategoryTab";
import SearchInput from "./SearchInput";

//style
import * as S from "./index.style";

const HomeSearchSection = () => {
  const [searchCategory, setSearchCategory] = useState<number>(15);
  return (
    <S.SearchContainer>
      <S.Wrapper>
        <S.TitleText $inverted>
          찾고싶은 행사, 숙소, 관광지를
          <br />
          검색해보세요.
        </S.TitleText>
        {/** SearchCategoryTab */}
        <CategoryTab
          setSearchCategory={setSearchCategory}
          searchCategory={searchCategory}
        />

        <S.SeachDiv>
          {/** Select */}
          <AreaSelect />
          {/** Input */}
          <SearchInput />
        </S.SeachDiv>
      </S.Wrapper>
    </S.SearchContainer>
  );
};

export default HomeSearchSection;
