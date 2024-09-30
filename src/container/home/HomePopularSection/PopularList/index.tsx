import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//component
import AreaCard from "../../../../components/AreaCard";

//style
import { SwiperWrapper } from "./index.style";

//constant
import { POPULAR } from "@/constant/popular";

const PopularList = () => {
  return (
    <SwiperWrapper>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          1280: {
            slidesPerView: 6,
            spaceBetween: 16,
          },
          1060: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
        }}
      >
        {POPULAR.map((popular) => (
          <SwiperSlide key={popular.keyword}>
            <AreaCard src={popular.src} keyword={popular.keyword} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default PopularList;
