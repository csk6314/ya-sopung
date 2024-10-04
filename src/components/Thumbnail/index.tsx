import { useEffect, useState } from "react";
import * as S from "./index.style";

interface Props {
  usage?: "list" | "detail";
  src: string;
}
const Thumbnail = ({ usage = "list", src }: Props) => {
  const [thumbImage, setThumbImage] = useState<string>();

  useEffect(() => {
    if (!src) return;

    const image = new Image();
    image.src = src;
    image.onload = () => {
      setThumbImage(src);
    };

    return () => {
      image.onload = null;
    };
  }, []);

  return <S.Thumbnail $thumbImage={thumbImage} $usage={usage} />;
};

export default Thumbnail;
