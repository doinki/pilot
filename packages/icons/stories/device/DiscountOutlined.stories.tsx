import type { Meta, StoryObj } from '@storybook/react';

import DiscountOutlined from '../../lib/device/DiscountOutlined';

const meta: Meta<typeof DiscountOutlined> = {
  component: DiscountOutlined,
  tags: ['autodocs'],
  title: 'device/DiscountOutlined',
};

export default meta;
type Story = StoryObj<typeof DiscountOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
