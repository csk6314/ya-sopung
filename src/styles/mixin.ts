import { css } from "styled-components";

export const WrapperStyle = css`
  width: calc(100% - 4rem);
  max-width: ${({ theme }) => theme.sectionSize.lg};
  margin: 0 auto;
`;
