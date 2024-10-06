import { Link } from "react-router-dom";
import Button from "../Button";
import LikeButton from "../Button/LikeButton";
import Thumbnail from "../Thumbnail";
import * as S from "./index.style";

import { KeywordData } from "@/api/api";

const ListItem = ({
  contentid,
  title,
  firstimage,
  addr1,
  addr2,
}: KeywordData) => {
  return (
    <S.Wrapper>
      <Thumbnail src={firstimage} />
      <S.Description>
        <h3>{title}</h3>
        <span>{addr1}</span>
        <span>{addr2 === "" ? "-" : addr2}</span>
      </S.Description>
      <S.UserItems>
        <LikeButton liked={true} />
        <Link to={`/detail/${contentid}`}>
          <Button skin="primary">상세보기</Button>
        </Link>
      </S.UserItems>
    </S.Wrapper>
  );
};

export default ListItem;
