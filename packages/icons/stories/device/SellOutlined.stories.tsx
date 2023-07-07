import type { Meta, StoryObj } from '@storybook/react';

import SellOutlined from '../../lib/device/SellOutlined';

const meta: Meta<typeof SellOutlined> = {
  component: SellOutlined,
  tags: ['autodocs'],
  title: 'device/SellOutlined',
};

export default meta;
type Story = StoryObj<typeof SellOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
