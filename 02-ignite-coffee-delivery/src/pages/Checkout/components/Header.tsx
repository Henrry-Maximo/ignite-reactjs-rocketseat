import type { ComponentProps } from "react";
import { Icon, InforHeader } from "../styles";

export function RootHeader({ ...props }: ComponentProps<"div">) {
  return <InforHeader {...props} />;
}

export function IconHeader({ ...props }: ComponentProps<"span">) {
  return <Icon {...props} />;
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
