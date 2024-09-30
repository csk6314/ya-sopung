import { FlexCenter } from "@/styles/mixin";
import styled from "styled-components";

export const Wrapper = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors["inputBorder-2"]};
  cursor: pointer;
  ${FlexCenter}
`;
