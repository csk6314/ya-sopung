import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import * as S from "./index.style";
import LikedCard from "@/components/LikedCard";
import { Scrollbar } from "swiper/modules";
import { LikedContentInfo } from "@/hooks/useLiked";

interface Props {
  likeds: LikedContentInfo[];
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
          <SwiperSlide key={liked.contentId}>
            <LikedCard
              contentId={liked.contentId}
              contentTypeId={liked.contentTypeId}
              title={liked.title}
              addr1={liked.addr1}
              firstimage={liked.firstimage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SwiperWrapper>
  );
};

export default LikedList;
