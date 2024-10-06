import { TInfoData } from "@/api/api";
import { getInfoList } from "../../utils";
import * as S from "../index.style";

interface Props {
  data: TInfoData;
}
const InfoList = ({ data }: Props) => {
  const infoList = getInfoList(data);
  return (
    <S.ContentDescribeBox>
      {infoList.map((info) => (
        <div key={info.title}>
          <span>{info.title}</span>
          {info.content ? (
            info.title === "홈페이지" ? (
              <a href={info.content} target="_blank">
                {info.content}
              </a>
            ) : (
              <p>{info.content}</p>
            )
          ) : (
            <p>-</p>
          )}
        </div>
      ))}
    </S.ContentDescribeBox>
  );
};

export default InfoList;
