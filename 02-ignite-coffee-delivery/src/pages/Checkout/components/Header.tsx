import type { ComponentProps } from "react";
import { CheckoutHeader, CheckoutIcon, ContainerHeaderDescription, ContainerHeaderSections, ContainerHeaderTitle } from "../styles";

export function RootHeader({ ...props }: ComponentProps<"div">) {
  return <CheckoutHeader {...props} />;
}

export function IconHeader({ ...props }: ComponentProps<"div">) {
  return <CheckoutIcon {...props} />;
}

export function DescriptionHeader({
  title,
  description,
}: HeaderDescriptionProps) {
  return (
    <ContainerHeaderSections>
      <ContainerHeaderTitle>{title}</ContainerHeaderTitle>
      <ContainerHeaderDescription>{description}</ContainerHeaderDescription>
    </ContainerHeaderSections>
  );
}

interface HeaderDescriptionProps extends ComponentProps<"div"> {
  title: string;
  description: string;
}
