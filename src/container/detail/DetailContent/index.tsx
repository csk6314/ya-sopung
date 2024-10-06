import * as S from "./index.style";
import Thumbnail from "@/components/Thumbnail";

import InfoList from "./InfoList";
import { TInfoData } from "@/api/api";

interface Props {
  data: TInfoData;
}

const DetailContent = ({ data }: Props) => {
  return (
    <S.ContentWrapper>
      <Thumbnail src={data.firstimage} usage="detail" />
      <InfoList data={data} />
    </S.ContentWrapper>
  );
};

export default DetailContent;
