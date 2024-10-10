import styled from "styled-components";

export const Wrapper = styled.article`
  width: 100%;
  display: flex;
  column-gap: 2.5rem;
  position: relative;

  @media ${({ theme }) => theme.mediaSize.md} {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
  }
`;

export const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  padding: 3rem 0;
  width: 16rem;

  & > h3 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  /* & > p {
    margin-top: 1rem;
    font-size: 0.875rem;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;

    display: -webkit-box;
    -webkit-line-clamp: 2; // 원하는 라인수
    -webkit-box-orient: vertical;
    height: 1.75rem;
  } */
`;

export const UserItems = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 1rem;
  display: flex;
  align-items: center;
  column-gap: 1.25rem;

  @media ${({ theme }) => theme.mediaSize.md} {
    position: static;
  }
`;
