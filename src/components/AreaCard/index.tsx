import { CardBox } from "./index.style";

interface Props {
  keyword: string;
  src: string;
}

const AreaCard = ({ keyword, src }: Props) => {
  return (
    <CardBox>
      <img src={src} />
      <span>{keyword}</span>
    </CardBox>
  );
};

export default AreaCard;
