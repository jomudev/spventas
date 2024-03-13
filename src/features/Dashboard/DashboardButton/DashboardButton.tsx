import { LinkButton } from "@/components/LinkButton/LinkButton";
import { ReactElement, useContext } from "react";
import DashboardContext from "../../Configuration/providers/DashboardContext";

export type DashboardButtonProps = {
  value: string;
  href: string;
  icon: ReactElement;
};

export const DashboardButton = ({ value, href, icon } : DashboardButtonProps) => {
  return (
    <LinkButton width="100%" icon={icon} href={href} >
      { value }
    </LinkButton>
  );
}