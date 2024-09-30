import styled, { css } from "styled-components";

export const InputWrapper = styled.div<{ $usage: string; $focused: boolean }>`
  display: flex;
  align-items: center;
  border: 1.5px solid
    ${({ theme, $focused }) =>
      $focused
        ? theme.colors["inputBorderFocus-2"]
        : theme.colors["inputBorder-2"]};
  padding-right: 1.5rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.textBlack};

  & > svg {
    opacity: 0.3;
  }

  ${({ $usage, $focused, theme }) => {
    if ($usage === "home") {
      return css`
        border: 1.5px solid
          ${$focused ? theme.colors.inputBorderFocus : theme.colors.inputBorder};
        border-radius: 0.5rem;
        color: ${theme.colors.textWhite};

        & > svg {
          opacity: 1;
        }
      `;
    }
  }}
`;

export const Input = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  color: inherit;
  background-color: transparent;
  border: none;
  outline: none;
  font: inherit;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;
