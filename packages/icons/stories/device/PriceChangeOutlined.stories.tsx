import type { Meta, StoryObj } from '@storybook/react';

import PriceChangeOutlined from '../../lib/device/PriceChangeOutlined';

const meta: Meta<typeof PriceChangeOutlined> = {
  component: PriceChangeOutlined,
  tags: ['autodocs'],
  title: 'device/PriceChangeOutlined',
};

export default meta;
type Story = StoryObj<typeof PriceChangeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
