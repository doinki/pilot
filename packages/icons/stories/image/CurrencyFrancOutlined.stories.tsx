import type { Meta, StoryObj } from '@storybook/react';

import CurrencyFrancOutlined from '../../lib/image/CurrencyFrancOutlined';

const meta: Meta<typeof CurrencyFrancOutlined> = {
  component: CurrencyFrancOutlined,
  tags: ['autodocs'],
  title: 'image/CurrencyFrancOutlined',
};

export default meta;
type Story = StoryObj<typeof CurrencyFrancOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
