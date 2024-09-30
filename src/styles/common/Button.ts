import styled from "styled-components";

export const PrimaryButton = styled.button`
  color: ${({ theme }) => theme.colors.textWhite};
  background-color: ${({ theme }) => theme.colors.mainBlue};
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const DefaultButton = styled.button`
  color: ${({ theme }) => theme.colors.mainBlue};
  background-color: ${({ theme }) => theme.colors.defaultButtonBg};
  border: 1px solid ${({ theme }) => theme.colors.defaultButtonBorder};
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;
