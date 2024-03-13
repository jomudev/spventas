import { Meta, Story } from '@storybook/nextjs';
import { Table, TableProps } from './Table';
import { RenderProducts } from '@/features/Products/components/ProductsTable/ProductsTable';
import { ExampleProducts } from '@/features/Billing/res/dataExamples';

const meta: Meta = {
  title: 'Components/Table',
  component: Table,
};

const Template: Story<TableProps> = (props) => (
  <Table {...props} />
);

export const Default = Template.bind({});
Default.args = {
  headers: [
    'Descripción', 
    'Cantidad', 
    'Descuento', 
    'Precio', 
    'Total'
  ],
  items: RenderProducts(ExampleProducts),
};

export default meta;