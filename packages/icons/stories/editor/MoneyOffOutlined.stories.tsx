import type { Meta, StoryObj } from '@storybook/react';

import MoneyOffOutlined from '../../lib/editor/MoneyOffOutlined';

const meta: Meta<typeof MoneyOffOutlined> = {
  component: MoneyOffOutlined,
  tags: ['autodocs'],
  title: 'editor/MoneyOffOutlined',
};

export default meta;
type Story = StoryObj<typeof MoneyOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
