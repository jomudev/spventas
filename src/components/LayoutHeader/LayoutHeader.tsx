import { DashboardToggleButton } from "@/features/Dashboard/DashboardToggleButton/DashboardToggleButton";

export type LayoutHeaderProps = {};

export const LayoutHeader = () => {
  return (
    <header style={{ position: "fixed" }} >
      <DashboardToggleButton />
    </header>
    );
};