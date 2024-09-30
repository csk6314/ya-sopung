import LogoPurple from "@/assets/logo_purple.png";
import LogoWhite from "@/assets/logo_white.png";
import { ROUTES } from "../../../constant/routes";
import { Link, useLocation } from "react-router-dom";
import styles from "./index.style";
import { isColoredHeader, isNavActive } from "./util";

const Header = () => {
  const location = useLocation();
  const isColored = isColoredHeader(location.pathname);
  console.log(isColored);
  return (
    <styles.Header>
      <styles.Wrapper>
        {/** Logo */}
        <styles.Logo>
          <span>야,소풍어때</span>
          <img src={isColored ? LogoPurple : LogoWhite} alt="logo" />
          <Link to={ROUTES[0].href}></Link>
        </styles.Logo>

        {/**  Nav */}
        <styles.NavList $isColored={isColored}>
          {ROUTES.slice(1).map((route) => (
            <styles.NavItem
              to={route.href}
              key={route.title}
              $isActive={isNavActive({
                href: route.href,
                path: location.pathname,
              })}
            >
              {route.title}
            </styles.NavItem>
          ))}
        </styles.NavList>
      </styles.Wrapper>
    </styles.Header>
  );
};

export default Header;
