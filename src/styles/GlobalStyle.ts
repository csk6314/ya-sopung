import { css } from "styled-components";
import reset from "styled-reset";

export const GlobalStyleCss = css`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard-Light";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 300;
    font-style: normal;
  }

  ${reset}

  * {
    font-family: "Pretendard-Regular" !important;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
