import styled, { css } from "styled-components";
import NoImage from "@/assets/no-image.png";

export const Thumbnail = styled.div<{
  $thumbImage?: string;
  $usage: "list" | "detail";
}>`
  ${({ $usage }) => {
    if ($usage === "list") {
      return css`
        width: 16rem;
      `;
    }
    return css`
      width: 22.5rem;
      height: 17.5rem;
    `;
  }}
  background-image: ${({ $thumbImage }) =>
    $thumbImage ? `url(${$thumbImage})` : `url(${NoImage})`};
  background-repeat: no-repeat;
  background-size: ${({ $thumbImage }) => ($thumbImage ? "cover" : "auto")};
  background-position: center;
  background-color: #d9d9d9;
  border-radius: 0.5rem;
`;
