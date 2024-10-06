import { DefaultButton, PrimaryButton } from "@/styles/common/Button";

interface Props {
  skin: "primary" | "default";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
}

const Button = ({ skin, children, onClick }: Props) => {
  if (skin === "default") {
    return <DefaultButton onClick={onClick}>{children}</DefaultButton>;
  }
  return <PrimaryButton onClick={onClick}>{children}</PrimaryButton>;
};

export default Button;
