import styled from "styled-components";

export const TitleText1 = styled.h2<{ $inverted?: boolean }>`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ $inverted, theme }) => $inverted && theme.colors.textWhite};
`;
export const TitleText2 = styled.h2<{ $inverted?: boolean }>`
  font-size: 40px;
  font-weight: bold;
  color: ${({ $inverted, theme }) => $inverted && theme.colors.textWhite};
`;
