import Spinner from "@/components/Spinner";
import { FlexCenter } from "@/styles/mixin";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  ${FlexCenter};
  height: 100vh;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
};

export default Loading;
