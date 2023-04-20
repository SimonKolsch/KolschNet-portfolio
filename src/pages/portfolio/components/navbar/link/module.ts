import { MouseEventHandler } from "react";

export interface LinkItemProps {
  title: string;
  to: string;
  tooltip?: string;
  // breadcrumbs?: boolean;
  // target?: boolean;
  // icon: React.ReactNode | "none" | "default";
  // onClick?: MouseEventHandler | undefined;
}
