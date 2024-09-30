import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.textWhite};
  padding-right: 1.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  color: inherit;
  background-color: transparent;
  border: none;
  outline: none;
  font: inherit;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const SearchInput = () => {
  const [keyword, setKeyword] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <InputWrapper>
      <Input onChange={handleOnChange} value={keyword} />
      <CiSearch strokeWidth={1.2} size={18} />
    </InputWrapper>
  );
};

export default SearchInput;
