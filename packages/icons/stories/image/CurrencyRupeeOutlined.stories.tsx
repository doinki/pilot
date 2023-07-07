import type { Meta, StoryObj } from '@storybook/react';

import CurrencyRupeeOutlined from '../../lib/image/CurrencyRupeeOutlined';

const meta: Meta<typeof CurrencyRupeeOutlined> = {
  component: CurrencyRupeeOutlined,
  tags: ['autodocs'],
  title: 'image/CurrencyRupeeOutlined',
};

export default meta;
type Story = StoryObj<typeof CurrencyRupeeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
