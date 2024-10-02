import { TitleText2 } from "@/styles/common/TitleText";
import { WrapperStyle } from "@/styles/mixin";
import styled from "styled-components";

export const MyContainer = styled.main`
  ${WrapperStyle}
  min-height: calc(100vh - 4rem);
  padding: 8rem 0;
`;

export const MyPageTitle = styled(TitleText2)`
  font-weight: 400;
  & > b {
    font-weight: bold;
  }
`;

export const MySection = styled.section`
  margin-top: 5rem;

  & > h3 {
    font-size: 1.75rem;
    font-weight: 600;
  }
`;
