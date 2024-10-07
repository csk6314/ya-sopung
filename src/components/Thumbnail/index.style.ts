import styled, { css } from "styled-components";
import NoImage from "@/assets/no-image.png";

export const Thumbnail = styled.div<{
  $thumbImage?: string;
  $usage: "list" | "detail" | "my";
}>`
  ${({ $usage }) => {
    if ($usage === "list") {
      return css`
        width: 16rem;
        height: 11.25rem;
        border-radius: 0.5rem;
      `;
    }
    if ($usage === "my") {
      return css`
        width: 5.75rem;
        height: 5.75rem;
        border-radius: 50%;
      `;
    }

    return css`
      width: 22.5rem;
      height: 17.5rem;
      border-radius: 0.5rem;
    `;
  }}
  background-image: ${({ $thumbImage }) =>
    $thumbImage ? `url(${$thumbImage})` : `url(${NoImage})`};
  background-repeat: no-repeat;
  background-size: ${({ $thumbImage }) => ($thumbImage ? "cover" : "auto")};
  background-position: center;
  background-color: #d9d9d9;
`;
