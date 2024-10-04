import { AREA_CODE } from "@/constant/area";
import { ROUTES } from "@/constant/routes";
import { useLocation, useSearchParams } from "react-router-dom";

const useParams = () => {
  const { pathname } = useLocation();
  const [searchParam] = useSearchParams();

  const contentType =
    ROUTES.find((route) => route.href === pathname)?.contentType ?? "15";
  const keyword = searchParam.get("keyword") ?? "";
  const code = searchParam.get("area") ?? "0";
  const area = AREA_CODE.find((ac) => ac.code === code) ?? AREA_CODE[0];

  if (area.code === "0") {
    area.code = "";
  }

  return { contentType, keyword, area };
};

export default useParams;
