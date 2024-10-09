import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

//assets
import LogoPurple from "@/assets/logo_purple.png";
import LogoWhite from "@/assets/logo_white.png";

//style
import styles from "./index.style";

//components
import Gnb from "./Gnb";

//util
import { isColoredHeader, isNavActive } from "./util";

//constant
import { ROUTES } from "../../../constant/routes";

//lib
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const location = useLocation();
  const isColored = isColoredHeader(location.pathname);

  const [showGnb, setShowGnb] = useState<boolean>(false);

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
          <button>
            <IoMenu
              size={24}
              onClick={() => {
                setShowGnb(!showGnb);
              }}
            />
          </button>
        </styles.NavList>

        {/** GNB */}
        {showGnb && <Gnb setShowGnb={setShowGnb} />}
      </styles.Wrapper>
    </styles.Header>
  );
};

export default Header;
