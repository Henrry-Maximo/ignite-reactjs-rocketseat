import type { ComponentProps } from "react";
import { CheckoutHeader, CheckoutIcon } from "../styles";

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
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

interface HeaderDescriptionProps extends ComponentProps<"div"> {
  title: string;
  description: string;
}
