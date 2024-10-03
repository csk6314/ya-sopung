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

export const TAG: {
  [k in TContentType]: string;
} = {
  12: "관광지",
  15: "행사/축제",
  32: "숙박시설",
};

export const TYPE_PLACEHOLDER: {
  [k in TContentType]: string;
} = {
  12: "지역 관광지 찾아보기",
  15: "지역 축제 찾아보기",
  32: "지역 숙박시설 찾아보기",
};
