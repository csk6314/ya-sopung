import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px dotted rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: ${rotation} 2s linear infinite;
`;

const Spinner = () => {
  return <Loader />;
};

export default Spinner;
