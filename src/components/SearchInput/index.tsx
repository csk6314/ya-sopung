import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//style
import * as S from "./index.style";

//constant
import { TContentType, CTYPE_CONSTANT } from "@/constant/content";

//state
import { useAreaStore } from "@/store/area";

//lib
import { CiSearch } from "react-icons/ci";
import { AREA_CODE } from "@/constant/area";

interface Props {
  usage?: "default" | "home";
  placeholder?: string;
  initialValue?: string;
  contenttypeid: TContentType;
}

const SearchInput = ({
  usage = "default",
  placeholder,
  initialValue,
  contenttypeid,
}: Props) => {
  const [keyword, setKeyword] = useState<string>(initialValue ?? "");
  const [focused, setFocused] = useState<boolean>(false);
  const area = useAreaStore((state) => state.area);
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    const searchParams = new URLSearchParams({});

    if (keyword.trim()) {
      searchParams.append("keyword", keyword);
    }

    if (area.code !== AREA_CODE[0].code) {
      searchParams.append("area", area.code);
    }

    navigate(
      `${CTYPE_CONSTANT[contenttypeid].router}?${searchParams.toString()}`
    );
  };

  useEffect(() => {
    setKeyword(initialValue ?? "");
  }, [initialValue]);

  return (
    <S.InputWrapper $usage={usage} $focused={focused}>
      <S.Input
        onChange={handleOnChange}
        value={keyword}
        placeholder={placeholder}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <CiSearch
        strokeWidth={1.2}
        size={18}
        onClick={() => {
          handleSearch();
        }}
      />
    </S.InputWrapper>
  );
};

export default SearchInput;
