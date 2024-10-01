import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  padding: 1rem 0;
  background-color: rgba(217, 217, 217, 0.5);
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;

  & > a {
    cursor: pointer;
  }
`;

export const CopyRight = styled.p`
  width: 100%;
  margin-top: 0.5rem;
  color: #a3a3a3;
  font-size: 0.75rem;
  text-align: center;
`;
