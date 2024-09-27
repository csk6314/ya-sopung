const colors = {
  //main
  mainPurple: "#1F0980",
  mainBlue: "#3B2DB5",

  //text
  textDarkgray: "#393939",
  textLightgray: "#626262",
  textWhite: "#FFFFFF",
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
  xs: "screen and (max-width: '400px')",
  sm: "screen and (max-width: '640px')",
  md: "screen and (max-width: '768px')",
  lg: "screen and (max-width: '1024px')",
  xl: "screen and (max-width: '1280px')",
  "2xl": "screen and (max-width: '1536px')",
};

const theme = {
  colors,
  fontSize,
  mediaSize,
};

export default theme;

export type Theme = typeof theme;
