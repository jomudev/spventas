'use client'
import { Button } from "@/components/Button/Button";
import DashboardContext from "@/features/Configuration/providers/DashboardContext";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const DashboardToggleButton = () => {
  const { toggle } = useContext(DashboardContext);
  return (
    <Button type="button" variant="outline" onClick={ () => toggle() } >
      <GiHamburgerMenu />
    </Button>
  );
};