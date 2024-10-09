import { SetStateAction, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

//assets
import LogoPurple from "@/assets/logo_purple.png";

//style
import * as S from "./index.style";

//constant
import { ROUTES } from "@/constant/routes";

//hook
import useMediaMatch from "@/hooks/useMediaMatch";

//lib
import { IoClose } from "react-icons/io5";

interface Props {
  setShowGnb: React.Dispatch<SetStateAction<boolean>>;
}

const Gnb = ({ setShowGnb }: Props) => {
  const location = useLocation();
  const isMobile = useMediaMatch(768);
  const [currentPath, setCurrentPath] = useState<string>(location.pathname);

  useEffect(() => {
    if (currentPath !== location.pathname) {
      setShowGnb(false);
      setCurrentPath(currentPath);
    }
  }, [currentPath, setShowGnb, location.pathname]);

  useEffect(() => {
    if (!isMobile) {
      setShowGnb(false);
    }
  }, [isMobile, setShowGnb]);

  return (
    <S.GnbWrapper>
      <S.GnbHeader>
        <Link to={ROUTES[0].href}>
          <img src={LogoPurple} alt="logo" />
        </Link>
        <button
          onClick={() => {
            setShowGnb(false);
          }}
        >
          <IoClose size={24} />
        </button>
      </S.GnbHeader>
      <S.GnbList>
        {ROUTES.slice(1).map(
          (route) =>
            route.icon && (
              <li key={route.title}>
                <Link to={route.href}>
                  <route.icon size={24} />
                  <span>{route.title}</span>
                </Link>
              </li>
            )
        )}
      </S.GnbList>
    </S.GnbWrapper>
  );
};

export default Gnb;
