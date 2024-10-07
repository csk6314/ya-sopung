import { useLocation, useSearchParams } from "react-router-dom";

//constant
import { AREA_CODE } from "@/constant/area";
import { ROUTES } from "@/constant/routes";

const useParams = () => {
  const { pathname } = useLocation();
  const [searchParam] = useSearchParams();

  const contentType =
    ROUTES.find((route) => route.href === pathname)?.contentType ?? "15";
  const keyword = searchParam.get("keyword") ?? "";
  const code = searchParam.get("area") ?? AREA_CODE[0].code;

  let area = AREA_CODE.find((ac) => ac.code === code) ?? AREA_CODE[0];

  if (area.code === AREA_CODE[0].code) {
    area = {
      code: "",
      name: AREA_CODE[0].name,
    };
  }

  return { contentType, keyword, area };
};

export default useParams;
