import styled from "styled-components";

export const SearchCategoryTab = styled.div`
  margin-top: 10rem;
  display: flex;
  column-gap: 1.5rem;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  padding: 0;
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.colors.textWhite};
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};

  &::after {
    bottom: -8px;
    left: 0;
    position: absolute;
    content: "";
    background-color: ${({ theme, $active }) =>
      $active ? theme.colors.textWhite : "transparent"};
    width: 100%;
    height: 2px;
  }
`;
