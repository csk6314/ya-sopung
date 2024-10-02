import axios from "axios";
import { APIResponse, CommonDetailData, KeywordData } from "./api";

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
        },
      },
    },
  } = await api.get<APIResponse<KeywordData>>("/searchKeyword1", {
    params: {
      numOfRows: 4,
      pageNo,
      listYN: "Y",
      arrange: "D",
      keyword,
      contentTypeId,
      areaCode,
      ...COMMON_PARAM,
    },
  });

  return items.map(({ contentid, contenttypeid }) => {
    return { contentid, contenttypeid };
  });
};

export const getCommonDetail = async (
  contentId: string
): Promise<CommonDetailData> => {
  const {
    data: {
      response: {
        body: {
          items: { item },
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

  return item[0];
};

export const getDetailIntro = async <DataType>({
  contentId,
  contentTypeId,
}: {
  contentId: string;
  contentTypeId: string;
}): Promise<DataType> => {
  const {
    data: {
      response: {
        body: {
          items: { item },
        },
      },
    },
  } = await api.get<APIResponse<DataType>>("/detailIntro1", {
    params: {
      ...COMMON_PARAM,
      contentId,
      contentTypeId,
    },
  });

  return item[0];
};
export default api;
