'use client'
import { Drawer } from "@/components/Drawer/Drawer";
import { ReactElement, useContext, useState } from "react";
import { DashboardContent } from "../DashboardContent/DashboardContent";
import DashboardContext from "../../Configuration/providers/DashboardContext";

export type DashboardProps = {
  children: ReactElement;
}

export const Dashboard = () => {
  const { isOpen, toggle } = useContext(DashboardContext);
  return (
    <aside>
      <Drawer 
        title='Punto de Ventas'
        isOpen={isOpen}
        placement="left"
        onClose={toggle}
        content={<DashboardContent />}
        />
    </aside>
  );
}