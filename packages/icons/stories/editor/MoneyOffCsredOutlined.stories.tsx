import type { Meta, StoryObj } from '@storybook/react';

import MoneyOffCsredOutlined from '../../lib/editor/MoneyOffCsredOutlined';

const meta: Meta<typeof MoneyOffCsredOutlined> = {
  component: MoneyOffCsredOutlined,
  tags: ['autodocs'],
  title: 'editor/MoneyOffCsredOutlined',
};

export default meta;
type Story = StoryObj<typeof MoneyOffCsredOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
