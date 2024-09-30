import { TitleText1 } from "@/styles/common/TitleText";
import { useState } from "react";
import styled from "styled-components";
import AreaSelect from "../AreaSelect";
import CategoryTab from "./CategoryTab";
import SearchInput from "./SearchInput";

const SearchContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.mainBlue};
  width: 100%;
  padding: 10rem 0;
`;

const Wrapper = styled.div`
  width: calc(100% - 4rem);
  max-width: ${({ theme }) => theme.sectionSize.lg};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleText = styled(TitleText1)`
  text-align: center;
`;

const HomeSearchContainer = () => {
  const [searchCategory, setSearchCategory] = useState<number>(15);
  return (
    <SearchContainer>
      <Wrapper>
        <TitleText $inverted>
          찾고싶은 행사, 숙소, 관광지를
          <br />
          검색해보세요.
        </TitleText>
        {/** SearchCategoryTab */}
        <CategoryTab
          setSearchCategory={setSearchCategory}
          searchCategory={searchCategory}
        />
        {/** Select */}
        <AreaSelect />
        {/** Input */}
        <SearchInput />
      </Wrapper>
    </SearchContainer>
  );
};

export default HomeSearchContainer;
