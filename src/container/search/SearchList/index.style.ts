import { FlexCenter } from "@/styles/mixin";
import styled from "styled-components";

export const SearchList = styled.div`
  padding-top: 4.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const LoadingWrapper = styled.div`
  padding-top: 4rem;
  ${FlexCenter};
`;
