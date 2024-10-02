import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import * as S from "./index.style";
import LikedCard from "@/components/LikedCard";
import { Scrollbar } from "swiper/modules";

interface Props {
  likeds: {
    id: number;
    title: string;
    date: string;
    place: string;
    imgURL: string;
  }[];
}

const LikedList = ({ likeds }: Props) => {
  return (
    <S.SwiperWrapper>
      <Swiper
        scrollbar={{ hide: true }}
        slidesPerView="auto"
        spaceBetween={10}
        modules={[Scrollbar]}
      >
        {likeds.map((liked) => (
          <SwiperSlide key={liked.id}>
            <LikedCard
              title={liked.title}
              date={liked.date}
              place={liked.place}
              imgURL={liked.imgURL}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SwiperWrapper>
  );
};

export default LikedList;
