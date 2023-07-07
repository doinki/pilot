import type { Meta, StoryObj } from '@storybook/react';

import PriceCheckOutlined from '../../lib/device/PriceCheckOutlined';

const meta: Meta<typeof PriceCheckOutlined> = {
  component: PriceCheckOutlined,
  tags: ['autodocs'],
  title: 'device/PriceCheckOutlined',
};

export default meta;
type Story = StoryObj<typeof PriceCheckOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
