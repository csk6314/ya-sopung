import styled from "styled-components";
import NoImage from "@/assets/no-image.png";

export const Wrapper = styled.article`
  width: 100%;
  display: flex;
  column-gap: 2.5rem;
  position: relative;
`;

export const Thumbnail = styled.div<{ $imgURL: string }>`
  width: 16rem;
  background-image: ${({ $imgURL }) => ($imgURL ? `url(${$imgURL})` : "")},
    url(${NoImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #d9d9d9;
  border-radius: 0.5rem;
`;

export const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  padding: 3rem 0;

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
`;
