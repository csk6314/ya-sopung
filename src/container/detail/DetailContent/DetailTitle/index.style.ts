import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;

  & > div:first-child {
    margin-bottom: 2rem;
  }
`;

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors["textParagraph-2"]};
`;
