import { TContentType } from "@/constant/content";

export interface APIResponse<T> {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      numOfRows: number;
      pageNo: number;
      totalCount: number;
      items: {
        item: T[];
      };
    };
  };
}

export interface KeywordData {
  contentid: string;
  contenttypeid: TContentType;
  addr1: string;
  addr2: string;
  firstimage: string;
  title: string;
}

// export interface KeywordData {
//   addr1: string;
//   addr2: string;
//   areacode: string;
//   booktour: string;
//   cat1: string;
//   cat2: string;
//   cat3: string;
//   contentid: string;
//   contenttypeid: TContentType;
//   createdtime: string;
//   firstimage: string;
//   firstimage2: string;
//   cpyrhtDivCd: string;
//   mapx: string;
//   mapy: string;
//   mlevel: string;
//   modifiedtime: string;
//   sigungucode: string;
//   tel: string;
//   title: string;
// }

export interface CommonDetailData {
  contentid: string;
  contenttypeid: TContentType;
  title: string;
  createdtime: string;
  modifiedtime: string;
  tel: string;
  telname: string;
  homepage: string;
  booktour: string;
  firstimage: string;
  firstimage2: string;
  areacode: string;
  sigungucode: string;
  addr1: string;
  addr2: string;
  overview: string;
}
export interface FestivalIntroDetailData {
  contentid: string;
  contenttypeid: TContentType;
  sponsor1: string;
  sponsor1tel: string;
  sponsor2: string;
  sponsor2tel: string;
  eventenddate: string;
  playtime: string;
  eventplace: string;
  eventhomepage: string;
  agelimit: string;
  bookingplace: string;
  placeinfo: string;
  subevent: string;
  program: string;
  eventstartdate: string;
  usetimefestival: string;
  discountinfofestival: string;
  spendtimefestival: string;
  festivalgrade: string;
}

export interface AccommodationIntroDetailData {
  contentid: string;
  contenttypeid: TContentType;
  goodstay: string;
  benikia: string;
  hanok: string;
  roomcount: string;
  roomtype: string;
  refundregulation: string;
  checkintime: string;
  checkouttime: string;
  chkcooking: string;
  seminar: string;
  sports: string;
  sauna: string;
  beauty: string;
  beverage: string;
  karaoke: string;
  barbecue: string;
  campfire: string;
  bicycle: string;
  fitness: string;
  publicpc: string;
  publicbath: string;
  subfacility: string;
  foodplace: string;
  reservationurl: string;
  pickup: string;
  infocenterlodging: string;
  parkinglodging: string;
  reservationlodging: string;
  scalelodging: string;
  accomcountlodging: string;
}

export interface AttractionIntroDetailData {
  contentid: string;
  contenttypeid: TContentType;
  heritage1: string;
  heritage2: string;
  heritage3: string;
  infocenter: string;
  opendate: string;
  restdate: string;
  expguide: string;
  expagerange: string;
  accomcount: string;
  useseason: string;
  usetime: string;
  parking: string;
  chkbabycarriage: string;
  chkpet: string;
  chkcreditcard: string;
}

export type TInfoData = CommonDetailData &
  FestivalIntroDetailData &
  AccommodationIntroDetailData &
  AttractionIntroDetailData;
