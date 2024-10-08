import axios from "axios";
import {
  AccommodationIntroDetailData,
  APIResponse,
  AttractionIntroDetailData,
  CommonDetailData,
  FestivalIntroDetailData,
  KeywordData,
} from "./api";

const API_KEY = import.meta.env.VITE_API_DECODING_KEY;

const COMMON_PARAM = {
  MobileOS: "WIN",
  MobileApp: "yasopung",
  _type: "json",
  serviceKey: API_KEY,
};

const DETAIL_OPTION = {
  defaultYN: "Y",
  firstImageYN: "Y",
  areacodeYN: "Y",
  addrinfoYN: "Y",
  overviewYN: "Y",
};

const api = axios.create({
  baseURL: "https://apis.data.go.kr/B551011/KorService1",
  timeout: 10_000,
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error);
  }
);

export const getSearchKeyword = async ({
  pageNo,
  keyword,
  contentTypeId,
  areaCode,
}: {
  pageNo: number;
  keyword: string;
  contentTypeId: string;
  areaCode: string;
}): Promise<KeywordData[]> => {
  const {
    data: {
      response: {
        body: {
          items: { item: items },
          numOfRows,
        },
      },
    },
  } = await api.get<APIResponse<KeywordData>>("/searchKeyword1", {
    params: {
      numOfRows: 5,
      pageNo,
      listYN: "Y",
      arrange: "D",
      keyword,
      contentTypeId,
      areaCode,
      ...COMMON_PARAM,
    },
  });

  if (numOfRows < 1) {
    return [];
  }

  return items.map(
    ({ contentid, contenttypeid, title, firstimage, addr1, addr2 }) => {
      return { contentid, contenttypeid, title, firstimage, addr1, addr2 };
    }
  );
};

export const getSearchArea = async ({
  pageNo,
  contentTypeId,
  areaCode,
}: {
  pageNo: number;
  contentTypeId: string;
  areaCode: string;
}): Promise<KeywordData[]> => {
  const {
    data: {
      response: {
        body: {
          items: { item: items },
          numOfRows,
        },
      },
    },
  } = await api.get<APIResponse<KeywordData>>("/areaBasedList1", {
    params: {
      numOfRows: 5,
      pageNo,
      listYN: "Y",
      arrange: "D",
      contentTypeId,
      areaCode,
      ...COMMON_PARAM,
    },
  });

  if (numOfRows < 1) {
    return [];
  }

  return items.map(
    ({ contentid, contenttypeid, title, firstimage, addr1, addr2 }) => {
      return { contentid, contenttypeid, title, firstimage, addr1, addr2 };
    }
  );
};

export const getCommonDetail = async (
  contentId: string
): Promise<CommonDetailData> => {
  const {
    data: {
      response: {
        body: {
          items: { item },
          numOfRows,
        },
      },
    },
  } = await api.get<APIResponse<CommonDetailData>>("/detailCommon1", {
    params: {
      ...COMMON_PARAM,
      ...DETAIL_OPTION,
      contentId,
    },
  });

  if (numOfRows < 1) {
    return Promise.reject("No Contents");
  }
  return item[0];
};

export const getDetailIntro = async ({
  contentId,
  contentTypeId,
}: {
  contentId: string;
  contentTypeId: string;
}): Promise<
  FestivalIntroDetailData &
    AccommodationIntroDetailData &
    AttractionIntroDetailData
> => {
  const {
    data: {
      response: {
        body: {
          items: { item },
          numOfRows,
        },
      },
    },
  } = await api.get<
    APIResponse<
      FestivalIntroDetailData &
        AccommodationIntroDetailData &
        AttractionIntroDetailData
    >
  >("/detailIntro1", {
    params: {
      ...COMMON_PARAM,
      contentId,
      contentTypeId,
    },
  });
  if (numOfRows < 1) {
    return Promise.reject("No Contents");
  }
  return item[0];
};
export default api;
