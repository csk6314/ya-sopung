import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 4rem);
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.h1`
  position: relative;
  & > span {
    width: 1px;
    height: 0px;
    display: block;
    color: transparent;
  }

  & > img {
    width: 67px;
  }

  & > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const NavList = styled.nav<{ $isColored: boolean }>`
  color: ${({ $isColored, theme }) =>
    $isColored ? theme.colors.textBlack : theme.colors.textWhite};
  display: flex;
  column-gap: 2.5rem;
`;

const NavItem = styled(Link)<{ $isActive: boolean }>`
  ${({ $isActive }) => {
    if ($isActive) {
      return css`
        font-weight: bold;
      `;
    }
  }}
`;

export default { Wrapper, Logo, NavList, NavItem };
