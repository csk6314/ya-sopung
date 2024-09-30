import styled from "styled-components";

export const CardBox = styled.article`
  width: 10rem;
  padding: 1.25rem 1.75rem;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.5rem;
  box-shadow: 4px 4px 14.2px rgba(0, 0, 0, 0.16);
  border-radius: 1.5rem;
  cursor: pointer;

  & > img {
    width: 92px;
    height: 92px;
    border-radius: 50%;
  }

  & > span {
  }
`;
