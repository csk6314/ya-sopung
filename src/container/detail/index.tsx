//style
import * as S from "./index.style";

//component
import DetailContent from "./DetailContent";
import LikeButton from "@/components/Button/LikeButton";
import Button from "@/components/Button";
import { useNavigate, useParams } from "react-router-dom";
import useDetailInfo from "@/hooks/useDetailInfo";
import DetailTitle from "./DetailTitle";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useDetailInfo(id ?? "");

  return (
    <S.DetailContainer>
      <S.Wrapper>
        <DetailTitle
          contentType={data.contenttypeid}
          title={data.title}
          addr1={data.addr1}
          addr2={data.addr2}
        />
        <DetailContent data={data} />
        <S.UserItemsWrapper>
          <Button
            skin="default"
            onClick={() => {
              navigate(-1);
            }}
          >
            리스트로 가기
          </Button>
          <LikeButton
            title={data.title}
            addr1={data.addr1}
            firstimage={data.firstimage}
            contentId={data.contentid}
            contentTypeId={data.contenttypeid}
          />
        </S.UserItemsWrapper>
      </S.Wrapper>
    </S.DetailContainer>
  );
};

export default Detail;
