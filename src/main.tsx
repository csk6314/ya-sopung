import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle } from "styled-components";
import { GlobalStyleCss } from "./styles/GlobalStyle.ts";

const GlobalStyle = createGlobalStyle`
  ${GlobalStyleCss}
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
