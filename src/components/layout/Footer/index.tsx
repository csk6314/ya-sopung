import * as S from "./index.style";
import GithubIcon from "@/assets/github.svg?react";
import InstagramIcon from "@/assets/instagram.svg?react";
import MailIcon from "@/assets/mail.svg?react";

const Footer = () => {
  return (
    <S.Wrapper>
      <S.SocialLinks>
        <a href="https://github.com/csk6314" target="_blank">
          <GithubIcon />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <InstagramIcon />
        </a>
        <a href="mailto:cotmdrb@gmail.com" target="_blank">
          <MailIcon />
        </a>
      </S.SocialLinks>
      <S.CopyRight>
        © 2024. 8조2팀명 All pictures cannot be copied without permission.
      </S.CopyRight>
    </S.Wrapper>
  );
};

export default Footer;
