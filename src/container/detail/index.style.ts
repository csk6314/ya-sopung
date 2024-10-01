import { WrapperStyle } from "@/styles/mixin";
import styled from "styled-components";

export const DetailContainer = styled.main`
  ${WrapperStyle}
  padding-top: 7.75rem;
`;

export const Wrapper = styled.section`
  width: 100%;
  position: relative;

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
`;
