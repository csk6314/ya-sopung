import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

import * as S from "./index.style";

interface Props {
  usage?: "default" | "home";
}

const SearchInput = ({ usage = "default" }: Props) => {
  const [keyword, setKeyword] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <S.InputWrapper $usage={usage} $focused={focused}>
      <S.Input
        onChange={handleOnChange}
        value={keyword}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
      />
      <CiSearch strokeWidth={1.2} size={18} />
    </S.InputWrapper>
  );
};

export default SearchInput;
