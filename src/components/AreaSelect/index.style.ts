import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const SelectBox = styled.div<{ $opened: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 11rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.selectBorder};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.textWhite};
  user-select: none;
  cursor: pointer;
  & > * {
    opacity: 0.8;
  }
  & > span {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const OptionList = styled.ul<{ $opened: boolean }>`
  position: absolute;
  display: ${({ $opened }) => ($opened ? "block" : "none")};
  bottom: 20%;
  max-height: 20rem;
  overflow-y: scroll;
  transform: translateY(105%);
  left: 0;
  background-color: ${({ theme }) => theme.colors.textWhite};
  width: 100%;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.textBlack};
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;

  &::-webkit-scrollbar {
    display: block;
    height: 10px;
    width: 10px;
    top: 30%;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(209, 213, 219); /*gray-300*/
    border: 2px solid white;
    border-radius: 5px;
  }
`;

export const OptionItem = styled.li`
  padding: 1rem;
  padding-left: 0.4rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: rgb(230, 230, 230);
  }
`;
