//style
import * as S from "./index.style";
import { TitleText2 } from "@/styles/common/TitleText";
import { TypeTag } from "@/styles/common/Tag";

//constant
import { CTYPE_CONSTANT, TContentType } from "@/constant/content";

interface Props {
  contentType: TContentType;
  title: string;
  addr1: string;
  addr2: string;
}

const DetailTitle = ({ contentType, title, addr1, addr2 }: Props) => {
  const tagName = CTYPE_CONSTANT[contentType].tag;
  return (
    <S.TitleWrapper>
      <TypeTag>{tagName}</TypeTag>
      <TitleText2>{title}</TitleText2>
      <S.Subtitle>{`${addr1}, ${addr2}`}</S.Subtitle>
    </S.TitleWrapper>
  );
};

export default DetailTitle;
