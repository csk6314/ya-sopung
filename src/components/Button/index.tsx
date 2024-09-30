import { DefaultButton, PrimaryButton } from "@/styles/common/Button";

interface Props {
  skin: "primary" | "default";
  children?: React.ReactNode;
}

const Button = ({ skin, children }: Props) => {
  if (skin === "default") {
    return <DefaultButton>{children}</DefaultButton>;
  }
  return <PrimaryButton>{children}</PrimaryButton>;
};

export default Button;
