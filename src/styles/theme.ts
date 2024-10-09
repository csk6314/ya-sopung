const colors = {
  //main
  mainPurple: "#1F0980",
  mainBlue: "#3B2DB5",

  //text
  textDarkgray: "#393939",
  textLightgray: "#626262",
  textWhite: "#FFFFFF",
  textBlack: "#000000",
  "textParagraph-1": "rgba(0,0,0,0.65)",
  "textParagraph-2": "rgba(0,0,0,0.5)",
  "textParagraph-3": "#626262",

  //input
  inputBorder: "rgba(234, 234, 234, 0.34)",
  inputBorderFocus: "rgba(255,255,255,0.7)",
  "inputBorder-2": "rgba(136,136,136,0.34)",
  "inputBorderFocus-2": "rgba(0,0,0,0.5)",

  //button
  defaultButtonBorder: "rgba(59,45,181,0.11)",
  defaultButtonBg: "#FFFFFF",
  hoverMainBgColor: "rgba(59,45,181,0.1)",
};

const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
};

const mediaSize = {
  xs: "screen and (max-width: 400px)",
  sm: "screen and (max-width: 640px)",
  md: "screen and (max-width: 768px)",
  lg: "screen and (max-width: 1024px)",
  xl: "screen and (max-width: 1280px)",
  "2xl": "screen and (max-width: 1536px)",
};

const sectionSize = {
  lg: "1280px",
};

const theme = {
  colors,
  fontSize,
  mediaSize,
  sectionSize,
};

export default theme;

export type Theme = typeof theme;
