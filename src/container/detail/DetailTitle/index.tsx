//style
import * as S from "./index.style";
import { TitleText2 } from "@/styles/common/TitleText";
import { TypeTag } from "@/styles/common/Tag";

//constant
import { TAG, TContentType } from "@/constant/content";

interface Props {
  contentType: TContentType;
  title: string;
  subtitle: string;
}

const DetailTitle = ({ contentType, title, subtitle }: Props) => {
  const tagName = TAG[contentType];
  return (
    <S.TitleWrapper>
      <TypeTag>{tagName}</TypeTag>
      <TitleText2>{title}</TitleText2>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.TitleWrapper>
  );
};

export default DetailTitle;
