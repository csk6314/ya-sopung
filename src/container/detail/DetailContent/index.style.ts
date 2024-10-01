import styled from "styled-components";
import NoImage from "@/assets/no-image.png";

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

  & p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors["textParagraph-2"]};
  }
`;

export const ContentImage = styled.div`
  width: 22.5rem;
  height: 17.5rem;
  background-image: url(${NoImage});
  background-repeat: no-repeat;
  background-position: center;
  background-color: #d9d9d9;
  border-radius: 0.5rem;
`;
