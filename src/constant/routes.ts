import { IconType } from "react-icons";
import { TContentType } from "./content";
import { MdAttractions, MdFestival } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { FaUser } from "react-icons/fa6";

interface IRoute {
  href: string;
  title: string;
  contentType?: TContentType;
  icon?: IconType;
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
    icon: MdFestival,
  },
  {
    href: "/accommodation",
    title: "숙박",
    contentType: "32",
    icon: TiHome,
  },
  {
    href: "/tourist-attr",
    title: "관광지",
    contentType: "12",
    icon: MdAttractions,
  },
  {
    href: "/my",
    title: "마이페이지",
    icon: FaUser,
  },
];
