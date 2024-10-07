//style
import * as S from "./index.style";
import "swiper/css";
import "swiper/css/scrollbar";

//component
import LikedCard from "@/components/LikedCard";

//lib
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

//constant
import { CTYPE_CONSTANT, TContentType } from "@/constant/content";
import { getLikedList } from "@/hooks/useLiked";

interface Props {
  contentTypeId: TContentType;
}

const LikedList = ({ contentTypeId }: Props) => {
  const listTitle = CTYPE_CONSTANT[contentTypeId].tag;
  const likedList = getLikedList().filter(
    (content) => content.contentTypeId === contentTypeId
  );

  return (
    <S.MySection>
      <h3>내가 찜한 {listTitle} 목록</h3>
      <S.SwiperWrapper>
        <Swiper
          scrollbar={{ hide: true }}
          slidesPerView="auto"
          spaceBetween={10}
          modules={[Scrollbar]}
        >
          {likedList.map((liked) => (
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
    </S.MySection>
  );
};

export default LikedList;
