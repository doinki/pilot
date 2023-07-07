import type { Meta, StoryObj } from '@storybook/react';

import CurrencyLiraOutlined from '../../lib/image/CurrencyLiraOutlined';

const meta: Meta<typeof CurrencyLiraOutlined> = {
  component: CurrencyLiraOutlined,
  tags: ['autodocs'],
  title: 'image/CurrencyLiraOutlined',
};

export default meta;
type Story = StoryObj<typeof CurrencyLiraOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
