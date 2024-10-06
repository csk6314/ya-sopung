import * as S from "./index.style";
import Thumbnail from "@/components/Thumbnail";

import DetailTitle from "./DetailTitle";

import useDetailInfo from "@/hooks/useDetailInfo";
import { useParams } from "react-router-dom";
import InfoList from "./InfoList";

const DetailContent = () => {
  const { id } = useParams();
  const { data } = useDetailInfo(id ?? "");

  return (
    <>
      <DetailTitle
        contentType={data.contenttypeid}
        title={data.title}
        addr1={data.addr1}
        addr2={data.addr2}
      />
      <S.ContentWrapper>
        <Thumbnail src={data.firstimage} usage="detail" />
        <InfoList data={data} />
      </S.ContentWrapper>
    </>
  );
};

export default DetailContent;
