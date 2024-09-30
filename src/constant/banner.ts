import FestivalImage from "@/assets/festival-banner.jpg";
import TourAttractionImage from "@/assets/tour-attr-banner.jpg";
import AccommodationImage from "@/assets/accommodation-banner.jpg";

interface IBannerInfo {
  title: string;
  subtitle: string;
  path: string;
  image: string;
}

export const NAV_BANNER: {
  [k: string]: IBannerInfo;
} = {
  festival: {
    title: "행사",
    subtitle: "Festival",
    path: "Home > Festival",
    image: FestivalImage,
  },
  "tourist-attr": {
    title: "관광지",
    subtitle: "Tourist Attraction",
    path: "Home > Tourist-Attraction",
    image: TourAttractionImage,
  },
  accommodation: {
    title: "숙소",
    subtitle: "Accommodation",
    path: "Home > Accommodation",
    image: AccommodationImage,
  },
} as const;
