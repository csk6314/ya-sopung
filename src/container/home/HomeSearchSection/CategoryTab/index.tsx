import { SetStateAction } from "react";

//style
import * as S from "./index.style";

//constant
import { SEARCH_CATEGORY, TContentType } from "@/constant/content";

interface Props {
  searchCategory: TContentType;
  setSearchCategory: React.Dispatch<SetStateAction<TContentType>>;
}

const CategoryTab = ({ searchCategory, setSearchCategory }: Props) => {
  return (
    <S.SearchCategoryTab>
      {SEARCH_CATEGORY.map((category) => (
        <S.TabButton
          key={category.typeCode}
          $active={searchCategory === category.typeCode}
          onClick={() => {
            setSearchCategory(category.typeCode);
          }}
        >
          {category.title} 검색
        </S.TabButton>
      ))}
    </S.SearchCategoryTab>
  );
};

export default CategoryTab;
