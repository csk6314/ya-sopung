import { getCommonDetail, getDetailIntro } from "@/api";
import { useSuspenseQuery } from "@tanstack/react-query";

const getDetailInfo = async (contentId: string) => {
  const commonData = await getCommonDetail(contentId);

  const introData = await getDetailIntro({
    contentId,
    contentTypeId: commonData.contenttypeid,
  });

  return { ...commonData, ...introData };
};

const useDetailInfo = (contentId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ["detail", contentId],
    queryFn: () => {
      return getDetailInfo(contentId!);
    },
  });

  return { data };
};

export default useDetailInfo;
