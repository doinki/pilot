import type { Meta, StoryObj } from '@storybook/react';

import CurrencyExchangeOutlined from '../../lib/action/CurrencyExchangeOutlined';

const meta: Meta<typeof CurrencyExchangeOutlined> = {
  component: CurrencyExchangeOutlined,
  tags: ['autodocs'],
  title: 'action/CurrencyExchangeOutlined',
};

export default meta;
type Story = StoryObj<typeof CurrencyExchangeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
