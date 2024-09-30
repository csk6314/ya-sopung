import styled from "styled-components";
import { TitleText2 } from "@/styles/common/TitleText";
import { WrapperStyle } from "@/styles/mixin";
export const Banner = styled.section<{ $bannerImage: string }>`
  color: white;
  width: 100%;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${({ $bannerImage }) => $bannerImage});

  background-size: cover;
`;

export const Wrapper = styled.div`
  ${WrapperStyle}
  padding: 9rem 0;
  position: relative;

  & > span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    bottom: 1rem;
    right: 0;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Main = styled.main``;

export const TitleText = styled(TitleText2)``;
