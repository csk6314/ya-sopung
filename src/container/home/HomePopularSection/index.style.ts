import { TitleText1 } from "@/styles/common/TitleText";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: calc(100% - 4rem);
  max-width: ${({ theme }) => theme.sectionSize.lg};
  margin: 0 auto;
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleText = styled(TitleText1)`
  text-align: center;
  margin-bottom: 4rem;
`;
