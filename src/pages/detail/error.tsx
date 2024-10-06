import { FlexCenter, WrapperStyle } from "@/styles/mixin";
import { SlClose } from "react-icons/sl";
import styled from "styled-components";

const ErrorWrapper = styled.section`
  ${WrapperStyle};
  padding-top: 7.75rem;
`;

const NoContentWrapper = styled.div`
  ${FlexCenter}
  flex-direction:column;
  padding: 20rem;
  row-gap: 1.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors["textParagraph-2"]};
`;

const DetailError = ({ error }: { error: any }) => {
  console.log(error);

  return (
    <ErrorWrapper>
      <NoContentWrapper>
        <SlClose size="10rem" />
        컨텐츠를 불러올 수 없습니다.
      </NoContentWrapper>
    </ErrorWrapper>
  );
};

export default DetailError;
