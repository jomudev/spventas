import type { Metadata } from "next";
import { Providers } from "./providers";
import { FooterBill } from "@/features/Billing/components/FooterBill/FooterBill";
import { Dashboard } from "@/features/Dashboard/DashboardPannel/Dashboard";
import { LayoutHeader } from "@/components/LayoutHeader/LayoutHeader";

export const metadata: Metadata = {
  title: "Sistema de Punto de Ventas",
  description: "Sistema para administración y gestión de ventas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
        <body>
          <Providers>
            <LayoutHeader />
            <Dashboard />  
              {children}
            <FooterBill />
          </Providers>
        </body>
    </html>
  );
}
