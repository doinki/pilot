import type { Meta, StoryObj } from '@storybook/react';

import ProductionQuantityLimitsOutlined from '../../lib/action/ProductionQuantityLimitsOutlined';

const meta: Meta<typeof ProductionQuantityLimitsOutlined> = {
  component: ProductionQuantityLimitsOutlined,
  tags: ['autodocs'],
  title: 'action/ProductionQuantityLimitsOutlined',
};

export default meta;
type Story = StoryObj<typeof ProductionQuantityLimitsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
