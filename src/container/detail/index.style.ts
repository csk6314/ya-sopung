import { WrapperStyle } from "@/styles/mixin";
import styled from "styled-components";

export const DetailContainer = styled.main`
  ${WrapperStyle}
  padding: 7.75rem 0;
`;

export const Wrapper = styled.section`
  width: 100%;
  position: relative;
`;

export const UserItemsWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  row-gap: 1rem;
  & > button:nth-of-type(1) {
    position: absolute;
    top: 0;
    left: 0;
  }

  & > button:nth-of-type(2) {
    position: absolute;
    top: 2rem;
    right: 1rem;
  }

  @media ${({ theme }) => theme.mediaSize.md} {
    & > button:nth-of-type(1) {
      position: static;
    }

    & > button:nth-of-type(2) {
      position: static;
    }
  }
`;
