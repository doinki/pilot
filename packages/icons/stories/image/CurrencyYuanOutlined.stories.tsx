import type { Meta, StoryObj } from '@storybook/react';

import CurrencyYuanOutlined from '../../lib/image/CurrencyYuanOutlined';

const meta: Meta<typeof CurrencyYuanOutlined> = {
  component: CurrencyYuanOutlined,
  tags: ['autodocs'],
  title: 'image/CurrencyYuanOutlined',
};

export default meta;
type Story = StoryObj<typeof CurrencyYuanOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
