import { TInfoData } from "@/api/api";

export type TInfoItem = {
  title: string;
  content: string;
};

const validateHomepage = (homepage: string) => {
  if (!homepage) {
    return "";
  }

  if (homepage.startsWith("<")) {
    return homepage.split('href="')[1].split('"')[0];
  }

  return homepage;
};

export const getInfoList = (data: TInfoData): TInfoItem[] => {
  if (data.contenttypeid === "12") {
    return [
      {
        title: "전화번호",
        content: data.infocenter,
      },
      {
        title: "주차 가능 여부",
        content: data.parking,
      },
      {
        title: "홈페이지",
        content: validateHomepage(data.homepage),
      },
      {
        title: "휴무일",
        content: data.restdate,
      },
      {
        title: "상세정보",
        content: data.overview,
      },
    ];
  }
  if (data.contenttypeid === "15") {
    return [
      {
        title: "이벤트 장소",
        content: data.eventplace,
      },
      {
        title: "운영기간",
        content: `${data.eventstartdate} ~ ${data.eventenddate}`,
      },
      {
        title: "운영시간",
        content: data.playtime,
      },
      {
        title: "홈페이지",
        content: validateHomepage(data.homepage),
      },
      {
        title: "상세정보",
        content: data.overview,
      },
    ];
  }
  if (data.contenttypeid === "32") {
    return [
      {
        title: "방 개수",
        content: data.roomcount,
      },
      {
        title: "방 타입",
        content: data.roomtype,
      },
      {
        title: "체크인 시간",
        content: data.checkintime,
      },
      {
        title: "체크아웃 시간",
        content: data.checkouttime,
      },

      {
        title: "주차가능 여부",
        content: data.parkinglodging,
      },

      {
        title: "홈페이지",
        content: validateHomepage(data.homepage),
      },
      {
        title: "상세정보",
        content: data.overview,
      },
    ];
  }
  return [];
};
