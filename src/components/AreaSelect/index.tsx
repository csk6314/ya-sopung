import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

//style
import * as S from "./index.style";

//state
import { useAreaStore } from "@/store/area";

//constant
import { AREA_CODE, AreaType } from "@/constant/area";

interface Props {
  usage?: "default" | "home";
  initialValue?: AreaType;
}

const AreaSelect = ({ usage = "default", initialValue }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const listRef = useRef<HTMLDivElement>(null);
  const area = useAreaStore((state) => state.area);
  const { setArea } = useAreaStore((state) => state.actions);

  useEffect(() => {
    if (initialValue) {
      setArea(initialValue);
    }
  }, []);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        isOpen &&
        listRef.current &&
        !listRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <S.Wrapper ref={listRef}>
      <S.SelectBox
        $usage={usage}
        $opened={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{area.name}</span>
        <IoIosArrowDown />
      </S.SelectBox>
      <S.OptionList $opened={isOpen}>
        {AREA_CODE.map((area) => (
          <S.OptionItem
            key={area.code}
            onClick={() => {
              setArea({
                name: area.name,
                code: area.code,
              });
              setIsOpen(false);
            }}
          >
            {area.name}
          </S.OptionItem>
        ))}
      </S.OptionList>
    </S.Wrapper>
  );
};

export default AreaSelect;
