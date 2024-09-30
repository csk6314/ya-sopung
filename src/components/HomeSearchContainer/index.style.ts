import { TitleText1 } from "@/styles/common/TitleText";
import styled from "styled-components";

export const SearchContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.mainBlue};
  width: 100%;
  padding: 10rem 0;
`;

export const Wrapper = styled.div`
  width: calc(100% - 4rem);
  max-width: ${({ theme }) => theme.sectionSize.lg};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:nth-child(2) {
    margin-bottom: 2rem;
  }
`;

export const TitleText = styled(TitleText1)`
  text-align: center;
`;

export const SeachDiv = styled.div`
  display: flex;
  column-gap: 0.5rem;
  width: 100%;

  & > div:nth-child(2) {
    flex: 1;
  }
`;
