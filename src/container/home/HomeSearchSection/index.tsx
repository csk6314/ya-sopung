import { useState } from "react";

//components
import AreaSelect from "../../../components/AreaSelect";
import CategoryTab from "./CategoryTab";
import SearchInput from "../../../components/SearchInput";

//style
import * as S from "./index.style";

//constant
import { TContentType, CTYPE_CONSTANT } from "@/constant/content";
import { AREA_CODE } from "@/constant/area";

const HomeSearchSection = () => {
  const [searchCategory, setSearchCategory] = useState<TContentType>("15");
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
          <AreaSelect usage="home" initialValue={AREA_CODE[0]} />
          {/** Input */}
          <SearchInput
            usage="home"
            placeholder={CTYPE_CONSTANT[searchCategory].placeholder}
            contenttypeid={searchCategory}
          />
        </S.SeachDiv>
      </S.Wrapper>
    </S.SearchContainer>
  );
};

export default HomeSearchSection;
