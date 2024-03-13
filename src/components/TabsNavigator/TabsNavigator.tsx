import { Tabs, TabsProps, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { ReactElement } from 'react';

export type TabsNavigatorProps = TabsProps & {
  tabList: ReactElement[];
  tabPanels: ReactElement[];
  children?: ReactElement;
};

export const TabsNavigator = ({ tabList, tabPanels, ...props } : TabsNavigatorProps) => {
  return (
    <Tabs {...props} width={"100%"}>
      <TabList>
        {
          tabList.map((tab) => <Tab key={crypto.randomUUID()}>{ tab }</Tab>)
        }
      </TabList>
      <TabPanels>
        {
          tabPanels.map((tabPanel) => <TabPanel key={crypto.randomUUID()}>{ tabPanel }</TabPanel>)
        }
      </TabPanels>
    </Tabs>
  );
};