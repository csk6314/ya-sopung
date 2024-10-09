import styled from "styled-components";

export const GnbWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

export const GnbHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  & > a > img {
    width: 6rem;
  }

  & > button {
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0.5rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.hoverMainBgColor};
    }
  }
`;

export const GnbList = styled.ul`
  & > li {
    & > a {
      padding: 1rem 0 1rem 1rem;
      display: flex;
      align-items: center;

      & > svg {
        color: ${({ theme }) => theme.colors.mainPurple};
        margin-right: 1rem;
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.hoverMainBgColor};
    }
  }
`;
