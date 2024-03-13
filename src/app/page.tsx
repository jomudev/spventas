import { ProductsGrid } from "@/features/Products/components/ProductsGrid/ProuctsGrid";
import styles from "./page.module.css";
import { TabsNavigator } from "@/components/TabsNavigator/TabsNavigator";
import { Text } from '@chakra-ui/react';
import { BillsGrid } from "@/features/Billing/components/BillsGrid/BillsGrid";

const tabs = ["Crear Venta", "Ventas Efectuadas"]
const panels = [ ProductsGrid, BillsGrid ];
export default async function Home() {
  const tabList = tabs.map(tab => <Text key={crypto.randomUUID()}>{ tab }</Text>)
  const tabPanels = panels.map(Panel => <Panel key={crypto.randomUUID()} />);
  return (
    <main className={styles.main}>
      <TabsNavigator
        variant="enclosed" 
        tabList={tabList}
        tabPanels={tabPanels}
      />
    </main>
  );
}
