import type { Meta, StoryObj } from '@storybook/react';

import CurrencyPoundOutlined from '../../lib/image/CurrencyPoundOutlined';

const meta: Meta<typeof CurrencyPoundOutlined> = {
  component: CurrencyPoundOutlined,
  tags: ['autodocs'],
  title: 'image/CurrencyPoundOutlined',
};

export default meta;
type Story = StoryObj<typeof CurrencyPoundOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
