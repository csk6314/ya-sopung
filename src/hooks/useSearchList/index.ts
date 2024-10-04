import { useEffect, useMemo } from "react";

import {
  DefaultError,
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";

import { getSearchKeyword } from "@/api";
import { KeywordData } from "@/api/api";
import { useInView } from "react-intersection-observer";

interface UseSearchListProps {
  keyword: string;
  areaCode: string;
  contentTypeId: string;
}

const useSearchList = ({
  keyword,
  areaCode,
  contentTypeId,
}: UseSearchListProps) => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, isLoading, isError, isFetchingNextPage } =
    useInfiniteQuery<
      KeywordData[],
      DefaultError,
      InfiniteData<KeywordData[], number>,
      QueryKey,
      number
    >({
      queryKey: ["search", { keyword, areaCode }],
      queryFn: ({ pageParam = 1 }) => {
        return getSearchKeyword({
          pageNo: pageParam,
          contentTypeId,
          keyword,
          areaCode: areaCode === "0" ? "" : areaCode,
        });
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length < 4 ? undefined : allPages.length + 1;
      },
    });

  const items = useMemo(() => {
    const temp: KeywordData[] = [];

    data?.pages.forEach((page) => {
      page.forEach((v) => {
        temp.push(v);
      });
    });
    return temp;
  }, [data]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return { items, isFetchingNextPage, isLoading, isError, ref };
};

export default useSearchList;
