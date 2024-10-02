import styled from "styled-components";
import NoImage from "@/assets/no-image.png";

export const Wrapper = styled.article`
  display: flex;
  column-gap: 2.25rem;
  padding: 1.5rem 2rem;
  box-shadow: 4px 4px 14.2px rgba(0, 0, 0, 0.16);
  width: 21.5rem;
  border-radius: 1.5rem;
  cursor: pointer;
`;

export const Thumbnail = styled.div<{ $imgURL: string }>`
  width: 5.75rem;
  height: 5.75rem;
  background-image: ${({ $imgURL }) => `url(${$imgURL})`}, url(${NoImage});
  background-repeat: no-repeat;
  background-position: center;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

export const Describe = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.375rem;
  overflow: hidden;

  & > * {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  & > h4 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  & > span:nth-of-type(1) {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors["textParagraph-2"]};
  }
  & > span:nth-of-type(2) {
    margin-top: 0.375rem;
    font-size: 0.875rem;
  }
`;
