import { SetStateAction } from "react";

//style
import * as S from "./index.style";

interface Props {
  searchCategory: number;
  setSearchCategory: React.Dispatch<SetStateAction<number>>;
}

type TCategory = {
  title: string;
  typeCode: number;
};

const SEARCH_CATEGORY: TCategory[] = [
  {
    title: "행사",
    typeCode: 15,
  },
  {
    title: "숙소",
    typeCode: 32,
  },
  {
    title: "관광지",
    typeCode: 12,
  },
];

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
