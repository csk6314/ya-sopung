import { TContentType } from "./content";

interface IRoute {
  href: string;
  title: string;
  contentType?: TContentType;
}

export const ROUTES: IRoute[] = [
  {
    href: "/",
    title: "home",
  },
  {
    href: "/festival",
    title: "행사",
    contentType: "15",
  },
  {
    href: "/accommodation",
    title: "숙박",
    contentType: "32",
  },
  {
    href: "/tourist-attr",
    title: "관광지",
    contentType: "12",
  },
  {
    href: "/my",
    title: "마이페이지",
  },
];
