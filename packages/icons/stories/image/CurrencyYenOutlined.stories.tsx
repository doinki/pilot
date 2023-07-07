import type { Meta, StoryObj } from '@storybook/react';

import CurrencyYenOutlined from '../../lib/image/CurrencyYenOutlined';

const meta: Meta<typeof CurrencyYenOutlined> = {
  component: CurrencyYenOutlined,
  tags: ['autodocs'],
  title: 'image/CurrencyYenOutlined',
};

export default meta;
type Story = StoryObj<typeof CurrencyYenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
