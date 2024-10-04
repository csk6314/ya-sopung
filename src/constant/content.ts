type TCategory = {
  title: string;
  typeCode: TContentType;
};

export type TContentType = "12" | "15" | "32";

export const SEARCH_CATEGORY: TCategory[] = [
  {
    title: "행사",
    typeCode: "15",
  },
  {
    title: "숙소",
    typeCode: "32",
  },
  {
    title: "관광지",
    typeCode: "12",
  },
];

type TContentConstant = {
  tag: string;
  placeholder: string;
  router: string;
};

export const CTYPE_CONSTANT: {
  [k in TContentType]: TContentConstant;
} = {
  12: {
    tag: "관광지",
    placeholder: "지역 관광지 찾아보기",
    router: "/tourist-attr",
  },
  15: {
    tag: "행사/축제",
    placeholder: "지역 축제 찾아보기",
    router: "/festival",
  },
  32: {
    tag: "숙박시설",
    placeholder: "지역 숙박시설 찾아보기",
    router: "/accommodation",
  },
};
