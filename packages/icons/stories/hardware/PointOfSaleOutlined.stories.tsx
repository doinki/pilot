import type { Meta, StoryObj } from '@storybook/react';

import PointOfSaleOutlined from '../../lib/hardware/PointOfSaleOutlined';

const meta: Meta<typeof PointOfSaleOutlined> = {
  component: PointOfSaleOutlined,
  tags: ['autodocs'],
  title: 'hardware/PointOfSaleOutlined',
};

export default meta;
type Story = StoryObj<typeof PointOfSaleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
