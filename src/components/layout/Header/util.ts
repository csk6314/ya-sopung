interface Props {
  href: string;
  path: string;
}

const COLORED_HEADER_PATH = ["/my", "/detail"];

export const isNavActive = ({ href, path }: Props) => {
  return href === path;
};

export const isColoredHeader = (path: string) => {
  for (let i = 0; i < COLORED_HEADER_PATH.length; i++) {
    if (path.startsWith(COLORED_HEADER_PATH[i])) return true;
  }
  return false;
};
