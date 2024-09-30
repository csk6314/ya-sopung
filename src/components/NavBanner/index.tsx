import { useLocation } from "react-router-dom";
import * as S from "./index.style";
import { NAV_BANNER } from "@/constant/banner";

const NavBanner = () => {
  const { pathname } = useLocation();
  const bannerData = NAV_BANNER[pathname.substring(1)];
  return (
    <S.Banner bannerImage={bannerData.image}>
      <S.Wrapper>
        <S.TitleBox>
          <S.TitleText>{bannerData.title}</S.TitleText>
          <span>{bannerData.subtitle}</span>
        </S.TitleBox>
        <span>{bannerData.path}</span>
      </S.Wrapper>
    </S.Banner>
  );
};

export default NavBanner;
