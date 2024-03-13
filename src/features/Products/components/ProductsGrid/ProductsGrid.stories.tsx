import { Meta, Story } from '@storybook/nextjs';
import { ProductsGrid, ProductsGridProps } from './ProuctsGrid';

const meta: Meta = {
  title: "Products/ProductsGrid",
  component: ProductsGrid,
};

const Template: Story<ProductsGridProps> = (props) => (
  <ProductsGrid {...props} />
);

export const Default = Template.bind({});
Default.args = {
  onProductClicked: (product) => console.log(product),
};

export default meta;