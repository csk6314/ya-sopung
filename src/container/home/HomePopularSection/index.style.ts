import { TitleText1 } from "@/styles/common/TitleText";
import { WrapperStyle } from "@/styles/mixin";
import styled from "styled-components";

export const Wrapper = styled.section`
  ${WrapperStyle}
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleText = styled(TitleText1)`
  text-align: center;
  margin-bottom: 4rem;
`;
