import styled from "styled-components";

export const TypeTag = styled.div`
  width: fit-content;
  padding: 0.25rem 0.375rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textWhite};
  background-color: ${({ theme }) => theme.colors.mainBlue};
  border-radius: 0.625rem;
`;
