import * as S from "./index.style";

interface Props {
  title: string;
  date: string;
  place: string;
  imgURL?: string;
}

const LikedCard = ({ title, date, place, imgURL = "" }: Props) => {
  return (
    <S.Wrapper>
      <S.Thumbnail $imgURL={imgURL} />
      <S.Describe>
        <h4>{title}</h4>
        <span>{date}</span>
        <span>{place}</span>
      </S.Describe>
    </S.Wrapper>
  );
};

export default LikedCard;
