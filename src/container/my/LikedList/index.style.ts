import styled from "styled-components";

export const SwiperWrapper = styled.div`
  width: calc(100% + var(--margin-width) - 0.5rem);
  --margin-width: calc((100vw - 100%) / 2);

  .swiper-slide {
    width: fit-content;
    padding: 2rem 0.25rem;
  }

  .swiper-scrollbar-drag {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
