import { TContentType } from "@/constant/content";
import { useState } from "react";

export interface LikedContentInfo {
  contentId: string;
  contentTypeId: TContentType;
  title: string;
  firstimage: string;
  addr1: string;
}

const LIKED_LIST_KEY = "liked-list";

export const getLikedList = (): LikedContentInfo[] => {
  const items = localStorage.getItem(LIKED_LIST_KEY);
  const likedList = items ? JSON.parse(items) : [];

  return likedList;
};

const addContent = ({
  contentId,
  contentTypeId,
  title,
  firstimage,
  addr1,
}: LikedContentInfo) => {
  const likedList = getLikedList();

  likedList.push({ contentId, contentTypeId, title, firstimage, addr1 });
  localStorage.setItem(LIKED_LIST_KEY, JSON.stringify(likedList));
};

const removeContent = (contentId: string) => {
  const likedList = getLikedList();
  const removedList = likedList.filter(
    (content) => content.contentId !== contentId
  );

  localStorage.setItem(LIKED_LIST_KEY, JSON.stringify(removedList));
};

const getLiked = (contentId: string): boolean => {
  const likedList = getLikedList();

  for (const content of likedList) {
    if (content.contentId === contentId) {
      return true;
    }
  }

  return false;
};

const useLiked = ({
  contentId,
  contentTypeId,
  title,
  firstimage,
  addr1,
}: LikedContentInfo) => {
  const [liked, setLiked] = useState<boolean>(getLiked(contentId));

  const toggleLiked = () => {
    if (liked) {
      removeContent(contentId);
      setLiked(false);
      return;
    }
    addContent({ contentTypeId, contentId, title, firstimage, addr1 });
    setLiked(true);
  };

  return { liked, toggleLiked };
};

export default useLiked;
