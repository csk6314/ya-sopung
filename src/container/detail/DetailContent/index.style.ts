import styled from "styled-components";

export const ContentWrapper = styled.div`
  padding: 0 7.75rem;
  padding-top: 6rem;
  padding-bottom: 12rem;
  display: flex;
  column-gap: 7.75rem;

  @media ${({ theme }) => theme.mediaSize.lg} {
    flex-direction: column;
    row-gap: 7.75rem;
    align-items: center;
  }
`;

export const ContentDescribeBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 22.5rem;
  row-gap: 0.75rem;

  & span {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & p,
  & a {
    font-size: 0.875rem;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors["textParagraph-2"]};
  }
`;
