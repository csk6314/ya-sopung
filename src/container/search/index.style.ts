import { WrapperStyle } from "@/styles/mixin";
import styled from "styled-components";

export const Container = styled.main`
  ${WrapperStyle};
  padding: 7.5rem 0;
  min-height: calc(100vh - 26rem);
`;

export const Wrapper = styled.section`
  width: 100%;

  & > h3 {
    font-size: 1.5rem;
    margin-bottom: 1.75rem;

    & > em {
      font-weight: bold;
    }
  }
`;

export const SearchDiv = styled.div`
  display: flex;
  column-gap: 0.25rem;
  width: 100%;

  & > div:nth-child(2) {
    flex: 1;
  }

  @media ${({ theme }) => theme.mediaSize.sm} {
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;

    & > div {
      width: 100%;
    }
  }
`;
