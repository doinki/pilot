import type { Meta, StoryObj } from '@storybook/react';

import CurrencyBitcoinOutlined from '../../lib/image/CurrencyBitcoinOutlined';

const meta: Meta<typeof CurrencyBitcoinOutlined> = {
  component: CurrencyBitcoinOutlined,
  tags: ['autodocs'],
  title: 'image/CurrencyBitcoinOutlined',
};

export default meta;
type Story = StoryObj<typeof CurrencyBitcoinOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
